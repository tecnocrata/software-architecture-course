// Estás desarrollando una aplicación para una plataforma de streaming que gestiona la reproducción de diferentes tipos de contenido multimedia,
// como música y videos. Actualmente, el código está diseñado de manera que una clase MediaPlayer maneja tanto la reproducción como la descarga de contenido
// multimedia. Además, el cálculo de los tiempos de reproducción está fuertemente acoplado a los tipos de contenido (por ejemplo, canciones, películas).

class MediaPlayer {
  playMusic(song: string): void {
    console.log(`Playing music: ${song}`);
    // Lógica para reproducir música
  }

  playVideo(video: string): void {
    console.log(`Playing video: ${video}`);
    // Lógica para reproducir video
  }

  downloadMedia(mediaType: string, mediaName: string): void {
    if (mediaType === "music") {
      console.log(`Downloading music: ${mediaName}`);
      // Lógica para descargar música
    } else if (mediaType === "video") {
      console.log(`Downloading video: ${mediaName}`);
      // Lógica para descargar video
    } else {
      console.log("Unsupported media type");
    }
  }

  calculatePlayTime(mediaType: string, length: number): string {
    if (mediaType === "music") {
      return `${length} minutes of music`;
    } else if (mediaType === "video") {
      return `${length} minutes of video`;
    } else {
      return "Unknown media type";
    }
  }
}

// Ejecución del código
const player = new MediaPlayer();
player.playMusic("Song 1");
player.playVideo("Movie 1");
console.log(player.calculatePlayTime("music", 3));
console.log(player.calculatePlayTime("video", 120));
player.downloadMedia("music", "Song 1");
player.downloadMedia("video", "Movie 1");
