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
        dididoListsClicked: false
    };

    // constructor(props){
    //     super(props);
    //     this.handleShowWhatdididoLists = this.handleShowWhatdididoLists.bind(this);
    //     this.handleShowOptions = this.handleShowOptions.bind(this);
    //     this.state = {showOptionsSave: false};
    // }

    // ShowOptionsOptionsave = (props) => {
    //     const showOptionsSave = props.showOptionsSave;
    //     if(showOptionsSave) {
    //         return <Whatdidido />;
    //     }
    //     return <Options />;
    // }

    // handleShowWhatdididoLists(){
    //     this.setState({showOptionsSave: true});
    // }

    // handleShowOptions(){
    //     this.setState({showOptionsSave: false});
    // }


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
        const json = JSON.stringify(this.state.ididList);
        localStorage.setItem('ididList', json);
        // optionSave = e.target.elements.option.value
        
        if (this.state.ididList.indexOf(optionSave) > -1){
            return 'This option already exists';
        } else {
            this.setState((prevState) => ({
                ididList: prevState.ididList.concat(optionSave)
            }));
        }
        alert(`${optionSave} saved!`)
    }

    // hasWhatdididoClicked = (hasClicked) => {
    //     if(!hasClicked) {
    //         this.setState(() => ({ dididoListsClicked: true }))
    //         return (
    //         <WhatdididoLists 
    //             ididList={this.state.ididList}
    //             handleDeleteSaveOption={this.handleDeleteSaveOption}
    //             handleDeleteSaveOptions={this.handleDeleteSaveOptions}
    //         />
    //         )
    //     } else {
    //         this.setState(() => ({ dididoListsClicked: false }));
    //         return (
    //             null
    //         )
    //     }
    // }

    hasClickeOptions = () => {
        const widgetOptions = document.querySelector('.widget_options');
        const widgetDidido = document.querySelector('.widget_didido');
        // const displayIdidlists = document.querySelector('.display_dididolists');
        // const displayOptions = document.querySelector('.display_options');

        if(widgetOptions.classList.contains('display_options') === false) {
            widgetOptions.classList.remove('display_options')
            widgetOptions.classList.add('display_options_active')
            widgetDidido.classList.add('display_dididolists')
            widgetDidido.classList.remove('display_dididolists_active')
        }
    }

    hasClickeddidido = () => {
        const widgetOptions = document.querySelector('.widget_options');
        const widgetDidido = document.querySelector('.widget_didido');
        // const displayIdidlists = document.querySelector('.display_dididolists');
        // const displayOptions = document.querySelector('.display_options');

        if(widgetDidido.classList.contains('display_dididolists') === false) {
            widgetDidido.classList.remove('display_dididolists')
            widgetDidido.classList.add('display_dididolists_active')
            widgetOptions.classList.add('display_options')
            widgetOptions.classList.remove('display_options_active')
        }

        
        // else {
        //     widgetDidido.classList.add('display_dididolists')
        //     widgetDidido.classList.remove('display_dididolists_active')
        //     widgetOptions.classList.remove('display_options')
        //     widgetOptions.classList.add('display_options_active')
        // }

        console.log(widgetDidido)
        console.log(widgetOptions)

        // else {
        //     widgetDidido.classList.add('.display_dididolists')
        //     widgetOptions.classList.remove('.display_options')
        // }
        // else {
        //     displayOptions.style.display = 'block'
        //     displayIdidlists.style.display = 'none'
        // }
    }

    // hasClickedOptions = () => {
    //     const displayIdidlists = document.querySelector('.display_dididolists')
    //     const displayOptions = document.querySelector('.display_options')

    //     if(displayIdidlists.style.display === 'block') {
    //         displayIdidlists.style.display = 'none'
    //         displayOptions.style.display = 'block'
    //     } else {
    //         null
    //     }
    // }

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
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log(this.state.options)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    
    
    render() {
        const subtitle = 'Put your life in the hands of a computer.';
        // const showOptionsSave = this.state.showOptionsSave;
        // let button;

        // showOptionsSaves = (props) => {
        //     const showOptionsSave = props.showOptionsSave;
            // if (showOptionsSave) {
            //     button = <ShowWhatdididoLists onClick={this.handleShowWhatdididoLists} />;
            // } else {
            //     button = <WhatdididoLists onClick={this.handleShowOptions} />;
            // }

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Whatdidido
                        dididoListsClicked={this.state.dididoListsClicked}
                        hasClickeOptions={this.hasClickeOptions}
                        hasClickeddidido={this.hasClickeddidido}
                    />
                    <div className="widget_options">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                    <div className="widget_didido">
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
