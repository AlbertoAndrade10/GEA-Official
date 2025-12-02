import { environment } from "../../environment/environment";

class ImageService {

    private readonly urlImage = environment.staticPaths.images + "/concerts";

    async getConcertImages(concertName: string): Promise<string[]> {
        const subfolder = `/${concertName}`;
        const response = await fetch(`${this.urlImage}${subfolder}/imagelist.json`);
        const data = await response.json();
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }

    // fetch images for "Concierto Mutante" concert
    async getMutantConcertImages(): Promise<string[]> {
        const subfolder = "/concierto-mutante";
        const response = await fetch(`${this.urlImage}/${subfolder}/imagelistMutant.json`);
        const data = await response.json();

        console.log(data)
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }

    // fetch images for "Concierto FunkClub" concert
    async getFunkClubConcertImages(): Promise<string[]> {
        const subfolder = "/concierto-funkclub";
        const response = await fetch(`${this.urlImage}/${subfolder}/imageListFunkClub.json`);
        const data = await response.json();

        console.log(data)
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }

    // fetch images for "Concierto SalaX" concert
    async getSalaXClubConcertImages(): Promise<string[]> {
        const subfolder = "/concierto-salaX";
        const response = await fetch(`${this.urlImage}/${subfolder}/imageListSalaX.json`);
        const data = await response.json();

        console.log(data)
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }
    // fetch images for "Concierto Hollander" concert
    async getHollanderConcertImages(): Promise<string[]> {
        const subfolder = "/concierto-hollander";
        const response = await fetch(`${this.urlImage}/${subfolder}/imageListHollander.json`);
        const data = await response.json();

        console.log(data)
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }
    // fetch images for "Concierto undergorund" concert
    async getUndergroundConcertImages(): Promise<string[]> {
        const subfolder = "/concierto-underground";
        const response = await fetch(`${this.urlImage}/${subfolder}/imageListUnderground.json`);
        const data = await response.json();

        console.log(data)
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }
    // fetch images for "Concierto hangar48" concert
    async getHangar48ConcertImages(): Promise<string[]> {
        const subfolder = "/concierto-hangar48";
        const response = await fetch(`${this.urlImage}/${subfolder}/imageListHangar48.json`);
        const data = await response.json();

        console.log(data)
        return data.images.map((imageName: string) => `${this.urlImage}${subfolder}/${imageName}`);
    }

}

export default ImageService;