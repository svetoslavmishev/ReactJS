import React, { Component } from 'react';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.css';

class PokemonForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {},
            pokemons: []
        }

        this.onPokemonDataChange = this.onPokemonDataChange.bind(this);
        this.onPokemonDataSubmit = this.onPokemonDataSubmit.bind(this);
        this.updatePokemonCollection = this.updatePokemonCollection.bind(this);
    }

    onPokemonDataChange(ev) {
        let name = ev.target.name;
        let value = ev.target.value;
        let form = this.state.form;
        form[name] = value;

        this.setState(prevState => {
            let form = prevState.form;
            return { form }
        })
    }

    onPokemonDataSubmit(ev) {
        ev.preventDefault();

        let payload = {
            pokemonName: this.state.form.pokemonName,
            pokemonImage: this.state.form.pokemonImage,
            pokemonInfo: this.state.form.pokemonInfo
        }

        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res);
            this.updatePokemonCollection();
        });
    }

    componentDidMount() {
        this.updatePokemonCollection();
    }

    updatePokemonCollection() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(res => {
                return res.json()
            }).then(data => {
                this.setState({ pokemons: data.pokemonColection })
            });
    }

    render() {
        return (
            <div>
                <h1>Pokemon Collection</h1>
                <form className="form-login" onSubmit={this.onPokemonDataSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleName">Pokemon Name</label>
                        <input name="pokemonName" onChange={this.onPokemonDataChange} type="text" className="form-control" id="exampleName" aria-describedby="emailHelp" placeholder="Pokemon Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleImage">Pokemon Image</label>
                        <input name="pokemonImage" onChange={this.onPokemonDataChange} type="text" className="form-control" id="exampleImage" placeholder="Pokemon URL" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInfo">Pokemon Info</label>
                        <input name="pokemonInfo" onChange={this.onPokemonDataChange} type="text" className="form-control" id="exampleInfo" placeholder="Pokemon Info" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.updatePokemonCollection}>Create Pokemon</button>
                </form >
                {this.state.pokemons.map((pokemon, i) => {
                    return <Pokemon key={i} data={pokemon} />
                })}
            </div>
        )
    }
}

export default PokemonForm;
