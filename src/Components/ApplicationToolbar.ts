import {Component, Public} from "../Components/Component";

@Component({
    module: "App",
    selector: "applicationToolbar",
    template: `
<md-toolbar>
    <h2>{{name}}</h2>
</md-toolbar>`
})
export class ApplicationToolbar {
    @Public
    name: string;
}