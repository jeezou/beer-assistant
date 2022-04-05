<template>
  <div class="wrapper">
    <div class="profile">
      <img :src="this.userData.avatar" alt="avatar" class="profile__avatar" />
      <div class="profile__info">
        <div class="profile__name">
          {{ this.userData.first_name }} {{ this.userData.last_name }},
          <span class="profile__yo">{{
            this.getAge(this.userData.date_of_birth)
          }}</span>
        </div>
        <div class="profile__post">{{ this.userData.employment.title }}</div>
      </div>
    </div>
    <div class="beer">
      <h1><span class="beer__header">Beer</span> Recommendation</h1>
      <!-- <div class="beer__image"><img :src="this.beerData." alt="beer" /></div> -->
      <div class="beer__items">
        <div class="beer__item name">
          <span class="beer__title">Title: </span
          ><span class="beer__content">{{ this.beerData.name }}</span>
        </div>
        <div class="beer__item brand">
          <span class="beer__title">Brand: </span>
          <span class="beer__content">{{ this.beerData.brand }}</span>
        </div>
        <div class="beer__item style">
          <span class="beer__title">Style: </span>
          <span class="beer__content">{{ this.beerData.style }}</span>
        </div>
        <div class="beer__item hop">
          <span class="beer__title">Hop: </span>
          <span class="beer__content">{{ this.beerData.hop }}</span>
        </div>
        <div class="beer__item malts">
          <span class="beer__title">Malts: </span>
          <span class="beer__content">{{ this.beerData.malts }}</span>
        </div>
        <div class="beer__item alc">
          <span class="beer__title">Alcohol: </span>
          <span class="beer__content">{{ this.beerData.alcohol }}</span>
        </div>
        <div class="beer__item blg">
          <span class="beer__title">BLG: </span>
          <span class="beer__content">{{ this.beerData.blg }}</span>
        </div>
        <div class="beer__item ibu">
          <span class="beer__title">IBU: </span>
          <span class="beer__content">{{ this.beerData.ibu }}</span>
        </div>
      </div>
      <div class="button-field">
        <div class="button-field__header">
          Wanna Another <span class="yellow"> &nbsp;Recommendation</span>?
        </div>
        <div class="button-field__button" @click="this.getNewBeerData">
          Get New
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      userData: null,
      beerData: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    getAge(bd) {
      let today = new Date();
      let birthDate = new Date(bd);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      return age;
    },
    getNewBeerData() {
      fetch("https://random-data-api.com/api/beer/random_beer")
        .then((response) => response.json())
        .then((data) => (this.beerData = data))
        .catch((e) => console.log(`Something went wrong ${e}`));
    },
    fetchData() {
      fetch("https://random-data-api.com/api/beer/random_beer")
        .then((response) => response.json())
        .then((data) => (this.beerData = data))
        .catch((e) => console.log(`Something went wrong ${e}`));

      fetch("https://random-data-api.com/api/users/random_user")
        .then((response) => response.json())
        .then((data) => (this.userData = data))
        .catch((e) => console.log(`Something went wrong ${e}`));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$base: #fafafab3;
$gray: #2d2d2daf;
$light: #fafafa;
$dark: #010101e1;
$yellow: #fbc03fea;

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  // box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  // border: 1px solid rgb(223, 223, 223);
  // border-radius: 1rem;
  padding: 100px;

  // background: $gray;

  .profile {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    padding-right: 60px;

    .profile__avatar {
      margin: 0 0 40px 0;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      background: rgba(130, 130, 130, 0.264);
      width: 8rem;
      transform: translatez(0);
      border-radius: 50%;
      border: 2px solid #ffbc2bea;
      overflow: hidden;
    }

    .profile__info {
      display: flex;
      flex-direction: column;
      font-weight: 500;

      .profile__name {
        font-size: 1rem;
        margin-bottom: 15px;

        .profile__yo {
          // color: $yellow;
          // font-weight: 600;
        }
      }
      .profile__post {
        font-size: 0.75rem;
        color: $base;
      }
    }
  }

  .beer {
    padding: 0 0 40px 70px;
    max-width: 40vw;

    border-left: 1px solid $light;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.096);
    // border-right: 1px solid rgba(0, 0, 0, 0.041);
    // border-top: 1px solid rgba(0, 0, 0, 0.041);

    // border-radius: 12px;

    // box-shadow: -11px 13px 27px -17px rgba(34, 60, 80, 0.2);

    // box-shadow: 2px 6px 37px -11px rgba(34, 60, 80, 0.2);

    .beer__header {
      color: $yellow;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
    }

    .beer__items {
      display: flex;
      flex-wrap: wrap;
      font-weight: 500;

      .beer__item {
        flex: 50%;
        display: flex;
        flex-direction: column;

        .beer__title {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          margin: 0 0 2px 0;
          font-size: 0.75rem;
        }

        .beer__content {
          padding: 5px;
          display: flex;
          align-content: center;
          justify-content: center;
          // border: 1px solid $light;
          border-radius: 20px;
          width: 80%;
          flex: 1 1 0;
          margin: 0 0 8px 0;
          // background: #fbc03fea;

          color: $light;

          font-size: 0.8rem;

          position: relative;

          &:after {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: -2px;
            left: 0;
            background: $yellow;
          }
        }

        &.ibu {
          .beer__content {
            mix-blend-mode: difference;
            width: 90%;
            // background: $yellow;
            // color: transparent;
            // filter: invert(1);
            // background-clip: text;
          }
        }
      }
      :nth-child(odd):not(:first-child):not(:last-child) {
        margin-bottom: 10px;
      }
      :nth-child(even):not(:first-child):not(:last-child) {
        margin-bottom: 10px;
      }
      :nth-child(1) {
        &.name {
          flex: 1 1 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: start;
          padding: 0 0 30px 0;

          .beer__title {
            font-size: 1rem;
            flex: 0 0 10%;
          }
          .beer__content {
            font-size: 0.9rem;
            // font-style: italic;
            font-weight: 600;
            flex: 0 0 80%;

            margin: 0;
          }
        }
      }
    }
    .button-field {
      padding: 20px 0 0 0;

      .button-field__header {
        font-size: 0.8rem;
        padding: 0 0 20px 0;
        font-weight: 900;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;

        .yellow {
          color: $yellow;
        }
      }

      .button-field__button {
        font-size: 0.7rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 90%;
        justify-content: center;
        align-items: center;
        padding: 10px;
        // background: $yellow;
        border: 2px solid $yellow;
        transition: all 0.3s ease-in-out;

        position: relative;
        z-index: 0;
        overflow: hidden;

        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          // border: 0px solid $yellow;

          transition: all 0.3s cubic-bezier(0.78, 0.23, 0.2, 0.93);

          z-index: -1;
        }
        &:hover {
          cursor: pointer;
          color: $dark;

          &:after {
            background: $yellow;
            top: 0;
            left: 0;
            width: 110%;
            height: 110%;
            // border: 2px solid $yellow;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .wrapper {
    padding: 50px;
    .beer {
      max-width: 50vw;
    }
  }
}

@media screen and (max-width: 960px) {
  .wrapper {
    padding: 20px;
    .profile {
      padding-right: 30px;
    }

    .beer {
      padding-left: 30px;
      max-width: 70vw;

      .button-field {
        .button-field__button {
          color: $dark;
          &:after {
            background: $yellow;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    padding: 20px;
    .profile {
      flex-direction: row;
      // padding-right: 30px;
      margin: 0 0 20px 0;

      .profile__avatar {
        margin: 0 30px 0 0;
      }
    }

    .beer {
      border-left: none;
      // border-top: 1px solid $light;
      // padding-left: 30px;
      padding-left: 6%;
      max-width: 90vw;

      h1 {
        text-align: center;
        margin: 20px 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    padding: 20px;
    .profile {
      flex-direction: row;
      // padding-right: 30px;
      margin: 0 0 20px 0;

      .profile__avatar {
        margin: 0 30px 0 0;
      }
    }

    .beer {
      border-left: none;
      // border-top: 1px solid $light;
      // padding-left: 30px;
      padding-left: 6%;
      max-width: 90vw;

      h1 {
        text-align: center;
        margin: 20px 0;
      }
    }
  }
}
</style>
