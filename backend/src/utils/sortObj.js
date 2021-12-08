

function compareTeams( teamA, teamB ) {
    if ( teamA.nome < teamB.nome ){
      return -1;
    }
    if ( teamA.nome > teamB.nome ){
      return 1;
    }
    return 0;
}

export default compareTeams;