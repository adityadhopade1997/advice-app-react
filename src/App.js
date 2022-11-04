import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {

    // 1. Going to add 'state' It is like a global object that contains all of the specific things about the specific components
    state = {
        advice: '' // 2. we are only considering to get the advice here so we have added only 1 property here
    }
    // 3. Wer here did need to fetch the advice before everything else for taht we use the react-lifecycle method componentDidMount()
    
    componentDidMount() {
        this.fetchAdvice()
    }

    // 4. we are creating a sepereate advicemethod to fetch the data from API

    fetchAdvice =  () => {
        axios.get(`https://api.adviceslip.com/advice`)
        .then((response) => {
            // 5. destructuring the below nmentioned path here
            const  {advice}= response.data.slip
            console.log(advice);

            // 6 .we want to display it in the below h1 but it is not possible so we need to use here another hook 
            // We apply class App state here

            // 7. to update the properties in the class based compoenets here we use

            this.setState({ advice: advice }) 

            // 8 . In the above statement what we have done here is taht we have just passiong the advice to our state object

        })
        .catch((error) => {
            console.log(error);
        })

    }


    render() {
        const {advice} = this.state
        return (
           
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>Give me advice</button>
                </div>
            </div>
        )
    }
}

export default App;