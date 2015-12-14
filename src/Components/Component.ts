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
        };

        angular.module(componentData.module).directive(componentData.selector, [() => new newConstructor()]);

        return <any> newConstructor;
    }
}

export function Public(target: any, name: string) {
    if (target.scope === undefined) {
        target.scope = {}
    }
    target.scope[name] = "@";
}