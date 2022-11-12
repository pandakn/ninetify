import "../styles/cardTrack.scss"

function Track({ tracks }) {
  return (
    <div className="container">
      {tracks.map((track) => (
        <div key={track.id} className="show-detail">
          <img src={track.album.images[1].url} />
          <h3>{track.name}</h3>
          <p>{track.artists[0].name}</p>
          <audio controls>
            <source src={track.preview_url} type="audio/mpeg"></source>
          </audio>
        </div>
      ))}
    </div>
  );
}

export default Track;
