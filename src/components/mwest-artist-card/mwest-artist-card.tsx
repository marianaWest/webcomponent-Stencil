import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwest-artist-card',
  styleUrl: 'mwest-artist-card.css',
  shadow: true,
})
export class MWestArtistCard {
  @Prop() firstName: string = '';
  @Prop() lastName: string = '';
  @Prop() dob: string = '';
  @Prop() placeOfBirth: string = '';
  @Prop() artwork: string = '';
  @Prop() artworkTitle: string = '';
  @Prop() photo: string = '';
  @Prop() resume: string = '';
  @Prop() medium: string = '';

  render() {
    return (
      <div class="b-artist-card-box">
        <div class="b-artist-card">
          <div class="b-artist-card__content">
            <div class="b-artist-card__artwork-container">
              <img class="b-artist-card__artwork" src={this.artwork} alt="painting"></img>
              <span class="b-artist-card__artwork-title">{this.artworkTitle}</span>
            </div>
            <div class="b-artist-card__avatar">
              <div class="b-artist-card__name-birth">
                <h2 class="b-artist-card__full-name">
                  {this.firstName} {this.lastName}
                </h2>
                <p class="b-artist-card__birth-info">
                  (b. {this.dob}, {this.placeOfBirth})
                </p>
              </div>
              <div class="b-artist-card__photo-container">
              <img class="b-artist-card__photo" src={this.photo} alt=""></img>
              </div>
             
            </div>
            <div class="b-artist-card__bio">
              <p class="b-artist-card__medium">{this.medium}</p>
              <div class="b-artist-card__resume">{this.resume}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
