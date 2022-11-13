import { Component } from "react";
import check from './check.png';

export class List extends Component {
    constructor (){
        super();
        this.state = {
            userInput: '',
            list: [],
        }
    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    // onChange нам нужен, чтобы смотреть как меняется состояние, когда пишет пользователь

    addItem(input){
        if (input === '') {
            alert ("Пожалуйста, введите данные")
        }
        else {
            // создаем переменную, которая будет отвечать за список, куда будут попадать все наши дела
            let listArray = this.state.list;
            //методом пуш, задаем, чтобы добавлялись данные в конец списка из input, но пока только отображаются в консоли
            listArray.push(input);
            this.setState({list: listArray, userInput: ''})
        }
        
    }
    crossedWord(event) {
        //как только произойдет событие мы должны что-то сделать, как подслушка
        const li = event.target;
        //после этого мы добавляем класслист
        li.classList.toggle('crossed')
    }
    deleteItem() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray});
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                <input type='text' placeholder="Ваш список..."
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
                </div>
                <div>
                    <button onClick={() => this.addItem(this.state.userInput)}>Добавить</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) =>
                    (<li onClick={this.crossedWord} key={index}>
                        <img src={check} alt='' width={20} />{' '}
                        {item}</li>)
                    )}
                </ul>
                <div>
                    <button onClick={() => this.deleteItem()}>Удалить</button>
                </div>
                </form>
            </div>
            
        )
    }
}