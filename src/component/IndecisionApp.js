import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Whatdidido from './WhatudIdo';
import WhatdididoLists from './WhatdididoLists';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        ididList: [],
        selectedOption: undefined,
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteSaveOptions = () => {
        this.setState(() => ({ ididList: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleDeleteSaveOption = (saveToRemove) => {
        this.setState((prevState) => ({
            ididList: prevState.ididList.filter((optionSave) => saveToRemove !== optionSave)
        }));
    }

    handleSaveOption = (optionSave) => {
        if (this.state.ididList.indexOf(optionSave) > -1){
            return alert('This option already exists');
        } else {
            this.setState((prevState) => ({
                ididList: prevState.ididList.concat(optionSave)
            }));
        }
        alert(`${optionSave} saved!`)
    }

    hasClickeOptions = () => {
        const widgetOptions = document.querySelector('.widget_options');
        const widgetDidido = document.querySelector('.widget_didido');

        if(widgetOptions.classList.contains('display_options') === true) {
            widgetOptions.classList.add('display_options_active')
            widgetOptions.classList.remove('display_options')
            widgetDidido.classList.add('display_dididolists')
            widgetDidido.classList.remove('display_dididolists_active')
        }
    }

    hasClickeddidido = () => {
        const widgetOptions = document.querySelector('.widget_options');
        const widgetDidido = document.querySelector('.widget_didido');

        if(widgetDidido.classList.contains('display_dididolists') === true) {
            widgetDidido.classList.add('display_dididolists_active')
            widgetDidido.classList.remove('display_dididolists')
            widgetOptions.classList.add('display_options')
            widgetOptions.classList.remove('display_options_active')
        }
    }

    handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            this.setState(() => ({
                selectedOption: option
            }));
            console.log(option)
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }


        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const jsonIdidList = localStorage.getItem('ididList');
            const options = JSON.parse(json);
            const ididList = JSON.parse(jsonIdidList);

            if (options || ididList) {
                this.setState(() => ({ options }));
                this.setState(() => ({ ididList }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

        if(prevState.ididList.length !== this.state.ididList.length) {
            const jsonIdidList = JSON.stringify(this.state.ididList);
            localStorage.setItem('ididList', jsonIdidList);
        }
        console.log(this.state.options)
        console.log(this.state.ididList)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    
    render() {
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Whatdidido
                        // dididoListsClicked={this.state.dididoListsClicked}
                        hasClickeOptions={this.hasClickeOptions}
                        hasClickeddidido={this.hasClickeddidido}
                    />
                    <div className="widget_options display_options_active">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                    <div className="widget_didido display_dididolists">
                        <WhatdididoLists
                            ididList={this.state.ididList}
                            handleDeleteSaveOption={this.handleDeleteSaveOption}
                            handleDeleteSaveOptions={this.handleDeleteSaveOptions}
                        />
                    </div>
                    
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleSaveOption={this.handleSaveOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        );
    }
}
