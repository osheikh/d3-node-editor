import { Node } from './node';
import template from './templates/node.pug';

var defaultTemplate = template();

export class Component {
    constructor(name, props) {
        this.name = name;
        this.template = props.template || defaultTemplate;
        this.builder = props.builder;
        this.worker = props.worker;
        this.created = props.created || function () { };
        this.destroyed = props.destroyed || function () { };
        this.icon = props.iconname || "fa-wrench";
        this.iconcolor = props.iconcolor || "deep-orange-9";
    }

    newNode() {
        return new Node(this.name);
    }
}