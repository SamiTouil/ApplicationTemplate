///<reference path="../../typings/tsd.d.ts" />

export function Component(componentData: any): any {
    return function<TFunction extends Function>(target: TFunction): TFunction {
        let newConstructor = function () {
            target.apply(this);
        };

        newConstructor.prototype = Object.create(target.prototype);
        newConstructor.prototype.constructor = target;
        newConstructor.prototype.template = componentData.template;
        newConstructor.prototype.restrict = componentData.restrict || "E";
        newConstructor.prototype.replace = true;

        newConstructor.prototype.link = (scope: any, element: ng.IAugmentedJQuery, attrs: any) => {
            //bind methods
            let methods = target.prototype.methods;
            let methodsNames = (methods && Object.getOwnPropertyNames(target.prototype.methods)) || [];
            for (let i = 0, methodsCount = methodsNames.length; i < methodsCount; i++) {
                let methodName  = methodsNames[i];
                scope[methodName] = methods[methodName];
            }
        };

        angular.module(componentData.module).directive(componentData.selector, [() => new newConstructor()]);

        return <any> newConstructor;
    }
}

export function BoundProperty(target: any, name: string) {
    if (target.scope === undefined) {
        target.scope = {}
    }
    target.scope[name] = "@";
}

export function BoundMethod(target: any, name: string, descriptor: any) {
    if (target.methods === undefined) {
        target.methods = {};
    }
    target.methods[name] = descriptor.value;
    return descriptor;
}