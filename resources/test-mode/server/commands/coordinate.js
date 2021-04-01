/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import { registerCmd } from '../systems/chat';
import { getForwardVectorServer } from '../utility/vector';

registerCmd('pos', '/pos | Gives you coordinate information', getCoordinate);

function getCoordinate(player) {
    const position = player.pos;
    player.send(`{f1c40f}X:${position.x} Y:${position.y} Z:${position.z}`);
}
