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
    
    // Detailed Pokemon data used
    base_experience?: number;
    height?: number;
    weight?: number;
    stats?: Array<{base_stat: number; stat: {name: string}}>;
    flavor_text_entries?: Array<{flavor_text: string}>
}

export default Pokemon;