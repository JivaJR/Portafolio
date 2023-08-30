import { tecnologias } from "../data/data";

export const getElementsByLevel = (level) => {
    const validLevels = ['important','secundary'];
    if (! validLevels.includes(level)){
        throw new Error(`${ level } is not a valid `);
    }
    return tecnologias.filter(
        tech => tech.level===level
    );
}