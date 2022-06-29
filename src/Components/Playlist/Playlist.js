import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./Playlist.css";

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange({ target }) {
        const name = target.value;
        this.props.onNameChange(name);
    }

    render() {
        return (
            <div className="Playlist">
                <input
                    defaultValue={"New Playlist"}
                    value={this.props.playlistName}
                    onChange={this.handleNameChange}
                />
                <TrackList
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button className="Playlist-save" onClick={this.props.onSave}>
                    SAVE TO SPOTIFY
                </button>
            </div>
        );
    }
}
