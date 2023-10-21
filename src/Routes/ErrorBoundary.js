import React, { Component } from "react";
import "../style.css";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div class="errorContainer">
            <i class="errorpage">Oops...</i>
            <h1 class="errorpage">
              {" "}
              Something went wrong. <span>😥</span>{" "}
            </h1>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;