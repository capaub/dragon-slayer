//                                      mode normale de base 
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
function throwDices(n,x)
{
    let min=n;
    let max=x*n;
    let randomThrowDices=Math.floor(Math.random() * (max - min +1)) + min;
    return randomThrowDices;
};

function initiative()
{
    let player=throwDices(10,6);
    let dragon=throwDices(10,6);
    if(player<dragon){
        return "dragon";
    }else{
        return "player";
    };
};

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

let lvl=Number(prompt("Choisis ton niveau de difficulté : \n 1.Facile \n 2.Normal \n 3.Difficile", 2));

let easy=throwDices(2,6);

let hard=throwDices(1,6);

let nbDices=10;

let faceDice=10;

let pvPlayer=100+throwDices(nbDices,faceDice);

let pvDragon=100+throwDices(nbDices,faceDice);

if(lvl==1){
    pvPlayer=100+throwDices(5,faceDice);
};

if(lvl==3){
    pvDragon=100+throwDices(7,faceDice);
};

let round=0;

document.write(
    `<div class="game-state">
    <figure class="game-state_player">
        <img src="images/knight.png" alt="Chevalier">
        <figcaption>`+pvPlayer+` PV</figcaption>
    </figure>
    <figure class="game-state_player">
        <img src="images/dragon.png" alt="Dragon">
        <figcaption>`+pvDragon+` PV</figcaption>
    </figure>
</div>`
);

while(pvPlayer>0 && pvDragon>0)
{
    let damage=throwDices(3,6);
    round++;

if(initiative()=="dragon"){
    if(lvl==1){
        console.log("dommage dragon de base "+damage);
        damage=Math.round(damage-(damage*easy/100));
        console.log("dommage dragon minoré "+damage);
    };
    if(lvl==3){
        console.log("tour "+round+" dommage dragon de base "+damage);
        damage=Math.round(damage+(damage*hard/100));
        console.log("dommage dragon majoré "+damage);
    };
    if(damage>pvPlayer){
        pvPlayer=0;
    }else{
        pvPlayer=pvPlayer-damage;
    };
    document.write(
        `<h3>${round}</h3>
        <figure class="game-round">
            <img src="images/dragon-winner.png" alt="Dragon vainqueur">
            <figcaption>Le dragon prend l'initiative, vous attaque et vous inflige ${damage} points de dommage !</figcaption>
        </figure>`
    );
}else{
    if(lvl==1){
        damage=Math.round(damage+(damage*easy/100));
        console.log(damage);
    };
    if(lvl==3){
        damage=Math.round(damage-(damage*hard/100));
        console.log(damage);
    };
    if(damage>pvDragon){
        pvDragon=0;
    }else{
        pvDragon=pvDragon-damage;
    }
    document.write(
        `<h3>${round}</h3>
        <figure class="game-round">
            <img src="images/knight-winner.png" alt="Chevalier vainqueur">
            <figcaption>Vous êtes le plus rapide, vous attaquez le dragon et lui infligez ${damage} points de dommage !</figcaption>
        </figure>`
    );
};
if (pvPlayer<(pvPlayer)) {
    
}
document.write(
        `<div class="game-state">
            <figure class="game-state_player">
                <img src="images/knight.png" alt="Chevalier">
                <figcaption>${pvPlayer} PV</figcaption>
            </figure>
            <figure class="game-state_player">
                <img src="images/dragon.png" alt="Dragon">
                <figcaption>${pvDragon} PV</figcaption>
            </figure>
        </div>`
        );
};

if(pvPlayer==0){
    document.write(
        `<footer>
            <h3>Fin de la partie</h3>
            <figure class="game-end">
                <figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption>
                <img src="images/dragon-winner.png" alt="Dragon vainqueur">
            </figure>
         </footer>`
    );
};
if(pvDragon==0){
    document.write(
        `<footer>
            <h3>Fin de la partie</h3>
            <figure class="game-end">
                <figcaption>Vous avez gagné le combat, vous avez décimé le Dragon !</figcaption>
                <img src="images/knight-winner.png" alt="Chevalier vainqueur">
            </figure>
        </footer>`
    );
};