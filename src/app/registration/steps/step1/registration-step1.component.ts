import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationService } from '../../registration.service';
import { User, Role } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
    templateUrl: 'registration-step1.component.html'
})
export class RegistrationStep1Component implements OnInit {
    public user: User;
    public roles: Role[];

    @ViewChild('step1') currentForm: NgForm;

    constructor(private registrationService: RegistrationService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: {roles: Role[]}) => {
            this.user = this.registrationService.user;
            this.roles = data.roles;
            this.registrationService.currentForm = this.currentForm;
        });
    }
}