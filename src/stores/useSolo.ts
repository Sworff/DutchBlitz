import { computed, ref } from "vue";
import type { GameState, Player, Round } from "../types/types";

export function useSolo() {
  const winningScore = ref(75);
  const players = ref<Array<Player>>([
    {
      id: 1,
      name: "Player 1",
      totalScore: 0,
      score: {
        dutch: 0,
        blitz: 0,
      },
    },
    {
      id: 2,
      name: "Player 2",
      totalScore: 0,
      score: {
        dutch: 0,
        blitz: 0,
      },
    },
  ]);

  const rounds = ref<Array<Round>>([
    {
      round: 1,
      player: players.value,
    },
  ]);

  const gameState = ref<GameState>({
    winningScore: winningScore.value,
    players: players.value,
    rounds: rounds.value,
  });

  const leaderBoard = computed(() => {
    return players.value.sort((a, b) => b.totalScore - a.totalScore);
  });

  function addPlayer() {
    const id = players.value.length + 1;
    players.value.push({
      id,
      name: `Player ${id}`,
      totalScore: 0,
      score: {
        dutch: 0,
        blitz: 0,
      },
    });
  }

  function editPlayer(player: Player, newName: string) {
    players.value
      .filter((p) => p.id === player.id)
      .map((p) => (p.name = newName));
  }

  function removePlayer(id: number) {
    players.value = players.value.filter((p) => id !== p.id);
  }

  function setRoundScore(newScore: Player) {
    if (
      newScore.totalScore + newScore.score.dutch - newScore.score.blitz >=
      winningScore.value
    ) {
      return alert(`${newScore.name} wins!`);
    }

    players.value
      .filter((p) => p.id === newScore.id)
      .map(
        (p) =>
          (p.totalScore =
            newScore.totalScore + newScore.score.dutch - newScore.score.blitz)
      );
  }

  function startNextRound() {
    rounds.value.push({
      round: rounds.value.length + 1,
      player: players.value.map((p) => resetPlayerScore(p)),
    });
  }

  function resetPlayerScore(player: Player) {
    return {
      id: player.id,
      name: player.name,
      totalScore: player.totalScore,
      score: {
        dutch: 0,
        blitz: 0,
        roundScore: 0,
      },
    };
  }

  return {
    winningScore,
    players,
    rounds,
    gameState,
    leaderBoard,
    addPlayer,
    editPlayer,
    removePlayer,
    setRoundScore,
    startNextRound,
  };
}
