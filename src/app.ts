import {ApplicationToolbar} from "./Components/ApplicationToolbar"; ApplicationToolbar;
import {Component} from "./Components/Component";

@Component({
    module: "App",
    selector: "application",
    template: `
<div layout="column">
    <application-toolbar name="ApplicationTest"></application-toolbar>
</div>`
})
export class Application {
    constructor(){
    }
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['App']);
});