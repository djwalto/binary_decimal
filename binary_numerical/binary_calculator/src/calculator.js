import React, { Component } from 'react'

export default class calculator extends Component {

    state = {
        number: 0
    };


    // handleChange = (event) => {
    //     let num = event.target.value;
    //     console.log(num);
    //     return num;
    // }
    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };// end onInputChange


    binaryCalc = (num) => {
        console.log("this state number", parseInt(this.state.number));
        num = parseInt(this.state.number);
        console.log(num);
        let binNum = num.toString().split('');
        console.log(binNum);
        console.log(binNum);
        let position = null;
        let result = null;
        let digit = null;
        for (let i in binNum) {
            position = binNum.length - 1 - i;
            digit = binNum[i];
            result += digit * 2 ** position;
            console.log(
                "Current position:",
                position + " Current digit:",
                digit + " Current result:",
                result
            );
        }
        console.log("Binary Calculator: ", result);

        return result;
    }





    render() {
        const answer = this.binaryCalc();
        return (
            <div>

                <input onChange={this.onInputChange('number')}></input>
                <button onClick={this.binaryCalc}>Click to Calculate</button>
                <h1>{answer}</h1>

            </div>
        )
    }
}
