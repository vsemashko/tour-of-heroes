import { Component, ComponentFactory, NgModule, Injectable } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';

export interface DynamicComponent {
}

@Injectable()
export class DynamicComponentBuilderService {

    constructor(protected compiler: RuntimeCompiler) {
    }

    private factoriesCache: {[templateKey: string]: ComponentFactory<DynamicComponent>} = {};

    public createComponentFactory(template: string): Promise<ComponentFactory<DynamicComponent>> {

        let factory = this.factoriesCache[template];

        if (factory) {
            return new Promise((resolve) => {
                resolve(factory);
            });
        }

        let dynamicComponent = this.createNewComponent(template);
        let module = this.createComponentModule(dynamicComponent);

        return new Promise((resolve) => {
            this.compiler
                .compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories) => {
                    factory = moduleWithFactories.componentFactories.find(factory => factory.componentType === dynamicComponent);

                    this.factoriesCache[template] = factory;

                    resolve(factory);
                });
        });
    }

    protected createNewComponent(template: string) {
        @Component({
            template: template,
        })
        class CustomDynamicComponent implements DynamicComponent {
        }
        return CustomDynamicComponent;
    }

    protected createComponentModule(componentType: any) {
        @NgModule({
            declarations: [
                componentType
            ],
        })
        class RuntimeComponentModule {
        }
        return RuntimeComponentModule;
    }
}