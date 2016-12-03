import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../registration.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'registration-step3.component.html'
})
export class RegistrationStep3Component implements OnInit {
    public user: User;
    public isCompleted:boolean;

    @ViewChild('step3') currentForm: NgForm;

    constructor(private registrationService: RegistrationService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: {}) => {
            this.user = this.registrationService.user;
            this.registrationService.currentForm = this.currentForm;
        });
    }
}