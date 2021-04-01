/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import { registerCmd } from '../systems/chat';
import { getForwardVectorServer } from '../utility/vector';

registerCmd('model', '/model <model_name> | Change you player model', changeModel);

function changeModel(player, args) {
    if (!args || !args[0]) {
        player.send(`/model <model_name>`);
        return;
    }
    player.model = args[0];
    player.send(`{2ecc71}Player model was changed`);
}
