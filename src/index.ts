import { PrismaClient } from '../generated/prisma';



const prisma = new PrismaClient();

async function createMultipleMovies() {
  const movies = await prisma.movie.createMany({
    data: [
      {
        title: "Avengers Endgame",
        description: "The Avengers assemble once more to reverse the damage caused by Thanos in Infinity War.",
        genre: "Action",
        releaseDate: new Date("2019-04-26"),
        rating: 8.4,
      },
      {
        title: "The Dark Knight",
        description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
        genre: "Action",
        releaseDate: new Date("2008-07-18"),
        rating: 9.0,
      },
      {
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
        rating: 8.6,
      },
      {
        title: "Inception",
        description: "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal history.",
        genre: "Sci-Fi",
        releaseDate: new Date("2010-07-16"),
        rating: 8.8,
      },
      {
        title: "Parasite",
        description: "A poor family schemes to become employed by a wealthy household by posing as unrelated, highly qualified individuals.",
        genre: "Thriller",
        releaseDate: new Date("2019-05-30"),
        rating: 8.6,
      },
      {
        title: "Joker",
        description: "A mentally troubled comedian descends into madness and becomes the iconic criminal mastermind.",
        genre: "Drama",
        releaseDate: new Date("2019-10-04"),
        rating: 8.4,
      },
      {
        title: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of decency.",
        genre: "Drama",
        releaseDate: new Date("1994-09-23"),
        rating: 9.3,
      },
      {
        title: "Spider-Man: No Way Home",
        description: "Peter Parker seeks help from Doctor Strange to make people forget he’s Spider-Man, but things go wrong.",
        genre: "Action",
        releaseDate: new Date("2021-12-17"),
        rating: 8.2,
      }
    ],
  });

  console.log(`${movies.count} movies created.`);
}





async function createMovie(){
     const newMovie = await prisma.movie.create({
        data: {
            //New movie every time
            title: "Avengers Endgame",
            description: "The Avengers assemble once more to reverse the damage caused by Thanos in Infinity War.",
            genre: "Action",
            releaseDate: new Date("2019-04-26"),
            rating: 8.4,

        },
     });

     console.log("Movie created:", newMovie);

}

async function getMovieById(id: number) {

    const movie = await prisma.movie.findUnique({
         where: {
            id: id
         }
            
    });

    console.log("Movie found:", movie);
}


async function updateMovie(id: number, updatedTitle: string, updatedDescription: string) {

    const updatedMovie = await prisma.movie.update({
        where: {
            id: id
        },
        data: {
            title: updatedTitle,
            description: updatedDescription
        }
    });

    console.log("Movie updated:", updatedMovie);
}

async function deleteMovie(id: number) {

  await prisma.movie.delete({
    where: {
      id: id
    }
  });

  console.log(`Movie with ID ${id} deleted.`);
}



async function main()
{
    //C.R.U.D Operations
    await createMovie();
    await createMultipleMovies();
    await getMovieById(4); 
    await updateMovie(4, "Updated Movie Title", "Updated Movie Description");
    await deleteMovie(4);
}


main().then(async () => await prisma.$disconnect())
.catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})