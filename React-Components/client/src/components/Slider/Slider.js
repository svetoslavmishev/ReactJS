import React from 'react';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageId: 0,
            imageUrl: ''
        };

        this.getImage = this.getImage.bind(this);
    }

    getImage = (id) => {
        fetch('http://localhost:9999/episodePreview/' + id)
            .then(res => {
                return res.json();
            })
            .then(parseData => {
                this.setState({ imageUrl: parseData.url });
                this.setState({ imageId: parseData.id });
            });
    }

    componentDidMount () {
        fetch('http://localhost:9999/episodePreview/' + this.state.imageId)
            .then(res => {
                return res.json();
            })
            .then(parseData => {
                this.setState({ imageUrl: parseData.url })
            });
    }

    render = () => (
        <section id="slider">
            <img className="button" src="/left.png" title="previous" alt="nav" onClick={()=>this.getImage(Number(this.state.imageId) - 1)} />
            <div className="image-container"><img src={this.state.imageUrl} alt="episode" /></div>
            <img className="button" src="/right.png" title="previous" alt="nav" onClick={()=>this.getImage(Number(this.state.imageId) + 1)} />
        </section>
    );
}


