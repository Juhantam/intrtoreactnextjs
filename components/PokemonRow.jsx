import Link from "next/link"
import {Button} from "@material-ui/core";

const PokemonRow = ({pokemon, onClick}) => (
    <>
        <tr key={pokemon.id}>
            <td>
                <Link href={`/pokemon/${pokemon.id}`}>
                    <a>{pokemon.name.english}</a>
                </Link>
            </td>
            <td>{pokemon.type.join(", ")}</td>
            <td>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onClick(pokemon)}
                >
                    More Information
                </Button>
            </td>
        </tr>
    </>
);

export default PokemonRow;