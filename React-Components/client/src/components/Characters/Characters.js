import React from 'react';
import Roster from './Roster';
import Details from './Details';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            id: 1,
            name: '',
            url: '',
            bio: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(data => {
                return data.json();
            })
            .then(parsedData => {
                this.setState({ images: parsedData })
            })

        this.getBio(this.state.id);
    }

    getBio(id) {
        fetch('http://localhost:9999/character/' + id)
            .then(data => {
                return data.json();
            })
            .then(parsedData => {
                this.setState({ id: parsedData.id })
                this.setState({ name: parsedData.name })
                this.setState({ url: parsedData.url })
                this.setState({ bio: parsedData.bio })
            })
    }

    render = () => (
        <div>
            <section id="roster">
                {this.state.images.map(image =>
                    <Roster image={image.url} key={image.id} getBio={() => this.getBio(image.id)} />
                )}
            </section>

            <Details
                name={this.state.name}
                url={this.state.url}
                bio={this.state.bio}
            />
        </div>
    )
}