import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

import { MenuItem } from '../models/menu-item';

@Injectable()
export class MenuService {

    private subject = new Subject<any>();

    public getListMenuItems(): MenuItem[] {

        return [
                new MenuItem('fa-home', 'dashboard', 'dashboard', 'DashBoard'),
                new MenuItem('fa-facebook-square', 'faces', 'faces', 'Face Recognition'),
                new MenuItem('fa-image', 'images', 'images', 'Image Recognition')
        ];
    }

    public selectMenuItem(selectedMenuItem: string) {
        this.subject.next({ text: selectedMenuItem });
    }

    public getSelectedMenuItem(): Observable<any> {
        return this.subject.asObservable();
    }
}
