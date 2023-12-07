import { Component } from 'react';
import { useNavigate } from 'react-router-dom';

export default class ErrorHandler extends Component {

    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        // TODO logging
    }

    render() {
        if (this.state.hasError) {
            useNavigate('/404');
        }

        return this.props.children;
    }
}