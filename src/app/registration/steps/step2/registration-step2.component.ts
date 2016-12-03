import { Component, OnInit, ViewChild } from '@angular/core';
import { User, Skill } from '../../user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../registration.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'registration-step2.component.html'
})
export class RegistrationStep2Component implements OnInit {
    public user: User;
    public skills: Skill[];

    @ViewChild('step2') currentForm: NgForm;

    constructor(private registrationService: RegistrationService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: {skills: Skill[]}) => {
            this.user = this.registrationService.user;
            this.skills = data.skills;
            this.registrationService.currentForm = this.currentForm;
        });
    }
}