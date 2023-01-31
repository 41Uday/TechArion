import {Component} from 'react'

import './index.css'

class GetRequest extends Component {

    state = {dataList: []}

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const response = await fetch(" https://gorest.co.in/public/v1/todos")
        const data = await response.json()
        this.setState({dataList: data.data})
        //console.log(data.data)
    }

    

    render() {
        const {dataList} = this.state 
        console.log(dataList)
        return (
            <div className='gr-container'>
                <ul className='list-container'>
                    {dataList.map(each => (
                        <li key={each.id} className="list-item">
                                <h1 className='list-head'>{each.title}</h1>
                                <p>Status : {each.status}</p>
                                <p>Due Date: {each.due_on}</p>
                                <p className='last-para-gr'>userID: {each.user_id}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default GetRequest