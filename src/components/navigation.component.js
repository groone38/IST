import {Component} from "../core/component";

export class NavigationComponent extends Component{
    constructor(id) {
        super(id);
        this.tabs = []
    }
    init() {
        this.$el.addEventListener('click', navClick.bind(this))
    }
    registerTabs(tabs) {
        this.tabs = tabs
    }
}

function navClick(e) {
    e.preventDefault()
    if(e.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        const activeTab = this.tabs.find(item => item.name === e.target.dataset.name)
        this.tabs.forEach(item => item.component.hide())
        activeTab.component.show()
    }
}