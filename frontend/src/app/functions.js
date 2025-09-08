const selectMenu = (path, menu)=> {
    return path === menu ? "selected-menu" : "";
};

export {selectMenu};