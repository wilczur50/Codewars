const areYouPlayingBanjo = (name) =>
    name.toLowerCase().split("")[0] !== "r"
        ? `${name} does not play banjo`
        : `${name} plays banjo`;
