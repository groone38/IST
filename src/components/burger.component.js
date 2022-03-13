import {Component} from "../core/component";

export class BurgerComponent extends Component {
    constructor(id) {
        super(id);

    }
    init() {
        this.$el.addEventListener('click', burgerHandler.bind(this))
    }
}

function burgerHandler(e) {
    console.log(e.target)
    let block = this.$el.querySelector('.burger_text')
    console.log(block)
    if(block.classList.contains('hide')) {
        block.classList.remove('hide')
    } else {
        block.classList.add('hide')
    }

}