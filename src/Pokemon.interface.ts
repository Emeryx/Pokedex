interface Pokemon{
    name: string;
    id: number;
    image: string;
    types: Array<{type: {name: string}}>;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    }
}

export default Pokemon;