const STAGE_CONFIGS = {
    1: { name: "ステージ 1: 瑞々しい草原", stageWidth: 1200, enemyHp: 1000, enemyFundSpeed: 0.25, enemySpawnRate: 0.005, bgm: "stage1.mp3", xpReward: 1500 }, 
    2: { name: "ステージ 2: 仄暗い林道", stageWidth: 1400, enemyHp: 2000, enemyFundSpeed: 0.7, enemySpawnRate: 0.012, bgm: "stage2.mp3", xpReward: 2500 },
    3: { name: "ステージ 3: 迷いの深い森", stageWidth: 1600, enemyHp: 3500, enemyFundSpeed: 1.3, enemySpawnRate: 0.015, bgm: "stage3.mp3", xpReward: 4000 },
    4: { name: "ステージ 4: 静かなる湿原", stageWidth: 1800, enemyHp: 5000, enemyFundSpeed: 1.6, enemySpawnRate: 0.017, bgm: "stage4.mp3", xpReward: 6000 },
    5: { name: "ステージ 5: 古戦場の跡地", stageWidth: 2000, enemyHp: 7500, enemyFundSpeed: 1.9, enemySpawnRate: 0.02, bgm: "stage5.mp3", xpReward: 9000 },
    6: { name: "ステージ 6: 荒涼たる岩場", stageWidth: 2200, enemyHp: 10000, enemyFundSpeed: 2.2, enemySpawnRate: 0.022, bgm: "stage6.mp3", xpReward: 13000 },
    7: { name: "ステージ 7: 吹き荒れる雪山", stageWidth: 2400, enemyHp: 14000, enemyFundSpeed: 2.5, enemySpawnRate: 0.025, bgm: "stage7.mp3", xpReward: 18000 },
    8: { name: "ステージ 8: 灼熱の火山脈", stageWidth: 2700, enemyHp: 19000, enemyFundSpeed: 2.8, enemySpawnRate: 0.027, bgm: "stage8.mp3", xpReward: 25000 },
    9: { name: "ステージ 9: 朽ちた城壁", stageWidth: 3000, enemyHp: 25000, enemyFundSpeed: 3.2, enemySpawnRate: 0.03, bgm: "stage9.mp3", xpReward: 35000 },
    10: { name: "ステージ 10: 忘却の王都", stageWidth: 3400, enemyHp: 33000, enemyFundSpeed: 3.6, enemySpawnRate: 0.033, bgm: "stage10.mp3", xpReward: 45000 },
    11: { name: "ステージ 11: 幻影の回廊", stageWidth: 3800, enemyHp: 42000, enemyFundSpeed: 4.0, enemySpawnRate: 0.036, bgm: "stage11.mp3", xpReward: 60000 },
    12: { name: "ステージ 12: 天空の神殿", stageWidth: 4200, enemyHp: 53000, enemyFundSpeed: 4.5, enemySpawnRate: 0.039, bgm: "stage12.mp3", xpReward: 80000 },
    13: { name: "ステージ 13: 奈落の底", stageWidth: 4600, enemyHp: 65000, enemyFundSpeed: 5.0, enemySpawnRate: 0.042, bgm: "stage13.mp3", xpReward: 100000 },
    14: { name: "ステージ 14: 混沌の渦", stageWidth: 5000, enemyHp: 80000, enemyFundSpeed: 5.5, enemySpawnRate: 0.045, bgm: "stage14.mp3", xpReward: 130000 },
    15: { name: "ファイナル: チェスマスター", stageWidth: 5500, enemyHp: 120000, enemyFundSpeed: 7.0, enemySpawnRate: 0.06, bgm: "boss.mp3", xpReward: 200000 }
};

// 【変更】イベント経験値を大幅に下方修正（バランス調整）
const EVENT_STAGE_CONFIGS = {
    1: { name: "イベント 1: 歩兵10連隊", stageWidth: 1500, enemyHp: 5000, enemyType: '歩', bgm: "event1.mp3", xpReward: 3000 },
    2: { name: "イベント 2: 突撃香車隊", stageWidth: 1800, enemyHp: 10000, enemyType: '香車', bgm: "event2.mp3", xpReward: 5000 },
    3: { name: "イベント 3: 桂馬の雨", stageWidth: 2000, enemyHp: 15000, enemyType: '桂馬', bgm: "event3.mp3", xpReward: 8000 },
    4: { name: "イベント 4: と金ラッシュ", stageWidth: 2200, enemyHp: 25000, enemyType: 'と金', bgm: "event4.mp3", xpReward: 12000 },
    5: { name: "イベント 5: 銀将の壁", stageWidth: 2400, enemyHp: 40000, enemyType: '銀将', bgm: "event5.mp3", xpReward: 20000 },
    6: { name: "イベント 6: 金将の盾", stageWidth: 2600, enemyHp: 60000, enemyType: '金将', bgm: "event6.mp3", xpReward: 35000 },
    7: { name: "イベント 7: 角行の嵐", stageWidth: 2800, enemyHp: 80000, enemyType: '角行', bgm: "event7.mp3", xpReward: 50000 },
    8: { name: "イベント 8: 飛車軍団", stageWidth: 3200, enemyHp: 120000, enemyType: '飛車', bgm: "event8.mp3", xpReward: 80000 },
    9: { name: "イベント 9: 龍王の咆哮", stageWidth: 3800, enemyHp: 180000, enemyType: '龍王', bgm: "event9.mp3", xpReward: 150000 },
    10: { name: "イベント 10: 絶望の王将群", stageWidth: 4500, enemyHp: 300000, enemyType: '王将', bgm: "event10.mp3", xpReward: 300000 }
};

const UNIT_TYPES = {
    '歩':   { cost: 30, hp: 30, attack: 5, speed: 0.8, maxCooldown: 20, spawnCooldown: 60, size: 35, font: 16, color1: '#ffffff', color2: '#e0e0e0', aoe: 0, multiHit: 1, range: 0, noReward: false, reqStage: 0, unlockXp: 0, promotedName: 'と金', chessName: 'Pawn', desc: '基本となる近接単体攻撃', chessDesc: '最も数の多い下級兵士。単体では怖くないが、群れると厄介。' },
    '香車': { cost: 70, hp: 50, attack: 15, speed: 2.5, maxCooldown: 12, spawnCooldown: 120, size: 40, font: 18, color1: '#f1f8e9', color2: '#c5e1a5', aoe: 0, multiHit: 1, range: 0, noReward: false, reqStage: 1, unlockXp: 500, promotedName: '成香', chessName: 'Pike', desc: '移動・攻撃速度が非常に速い', chessDesc: '鋭い槍で前線に高速突撃を仕掛けてくる危険な尖兵。' },
    '桂馬': { cost: 120, hp: 80, attack: 30, speed: 1.5, maxCooldown: 40, spawnCooldown: 180, size: 45, font: 20, color1: '#fff3e0', color2: '#ffcc80', aoe: 0, multiHit: 2, range: 200, noReward: false, reqStage: 2, unlockXp: 1500, promotedName: '成桂', chessName: 'Knight', desc: '離れた位置からの2体同時遠距離攻撃', chessDesc: '変則的な動きで、安全な位置から2体同時に射抜いてくる騎士。' },
    'と金': { cost: 200, hp: 200, attack: 40, speed: 0.8, maxCooldown: 50, spawnCooldown: 240, size: 45, font: 20, color1: '#fce4ec', color2: '#f48fb1', aoe: 0, multiHit: 2, range: 0, noReward: true, reqStage: 3, unlockXp: 3000, promotedName: '真と金', chessName: 'Guard', desc: '2体同時攻撃、撃破されても資金を与えない', chessDesc: '堅牢な盾を持つ近衛兵。倒しても資金を落とさない嫌な相手。' },
    '銀将': { cost: 350, hp: 600, attack: 80, speed: 0.7, maxCooldown: 70, spawnCooldown: 360, size: 50, font: 22, color1: '#eceff1', color2: '#b0bec5', aoe: 0, multiHit: 2, range: 0, noReward: false, reqStage: 4, unlockXp: 5000, promotedName: '成銀', chessName: 'Bishop', desc: '前方への2体同時攻撃（体力高め）', chessDesc: '高い耐久力を持ち、斜めから2体同時に攻撃を仕掛ける僧侶。' },
    '金将': { cost: 500, hp: 900, attack: 120, speed: 0.7, maxCooldown: 90, spawnCooldown: 480, size: 55, font: 24, color1: '#fff9c4', color2: '#fff176', aoe: 0, multiHit: 3, range: 0, noReward: false, reqStage: 5, unlockXp: 8000, promotedName: '真金将', chessName: 'Rook', desc: '前方への3体同時攻撃（体力高め）', chessDesc: '前線を制圧する重装歩兵。3体同時のなぎ払い攻撃が脅威。' },
    '角行': { cost: 800, hp: 800, attack: 250, speed: 0.6, maxCooldown: 120, spawnCooldown: 720, size: 65, font: 28, color1: '#e3f2fd', color2: '#90caf9', aoe: 150, multiHit: 1, range: 250, noReward: false, reqStage: 6, unlockXp: 15000, promotedName: '竜馬', chessName: 'ArchB', desc: '超遠距離からの一斉範囲攻撃', chessDesc: '超遠距離から強力な範囲魔法を撃ち込んでくる高位の魔術師。' },
    '飛車': { cost: 1200, hp: 3000, attack: 800, speed: 1.8, maxCooldown: 150, spawnCooldown: 900, size: 70, font: 30, color1: '#f3e5f5', color2: '#ce93d8', aoe: 150, multiHit: 1, range: 0, noReward: false, reqStage: 7, unlockXp: 25000, promotedName: '竜王', chessName: 'Chariot', desc: '高速で前線を押し上げる強力な範囲攻撃', chessDesc: '恐るべきスピードで突進し、周囲を蹂躙する強力な戦車。' },
    '龍王': { cost: 2000, hp: 3000, attack: 3500, speed: 0.5, maxCooldown: 200, spawnCooldown: 1500, size: 80, font: 34, color1: '#d1c4e9', color2: '#9575cd', aoe: 0, multiHit: 1, range: 0, noReward: false, reqStage: 8, unlockXp: 40000, promotedName: '真龍王', chessName: 'Queen', desc: '極めて高い攻撃力を誇る単体攻撃', chessDesc: '一撃必殺の破壊力を持つ、敵軍最強の近接暗殺者。' },
    '王将': { cost: 3500, hp: 15000, attack: 1500, speed: 0.3, maxCooldown: 300, spawnCooldown: 2400, size: 95, font: 40, color1: '#ffecb3', color2: '#ffb300', aoe: 250, multiHit: 1, range: 0, noReward: false, reqStage: 9, unlockXp: 80000, promotedName: '大帝', chessName: 'King', desc: '圧倒的な体力と巨大な範囲攻撃', chessDesc: '圧倒的な体力と絶望的な範囲攻撃を放つ、敵軍の絶対的指導者。' }
};
const unitKeys = Object.keys(UNIT_TYPES);

const MAX_LEVEL = 20;

let state = {
    unlockedStage: 1, 
    unlockedEventStage: 1,
    isEventStage: false,
    
    playerXP: 0, 
    unitLevels: { '歩':1, '香車':1, '桂馬':1, 'と金':1, '銀将':1, '金将':1, '角行':1, '飛車':1, '龍王':1, '王将':1 },
    unlockedUnits: { '歩': true, '香車': false, '桂馬': false, 'と金': false, '銀将': false, '金将': false, '角行': false, '飛車': false, '龍王': false, '王将': false },
    defeatedEnemies: {}, 
    baseUpgrades: { fundSpeed: 1, towerHp: 1, initialWallet: 1 },
    currentStage: 1,
    walletLevel: 1,
    p1: { hp: 1000, funds: 0 },
    p2: { hp: 2000, funds: 0, maxFunds: 1000 },
    p1Cooldowns: {}, 
    p2Cooldowns: {}, 
    units: [],
    isGameOver: true,
    animationId: null
};

let epilogueTimeout;

const viewport = document.getElementById('game-viewport');
const stageContainer = document.getElementById('game-stage');
const buttonContainer = document.getElementById('button-container');
const bgmPlayer = document.getElementById('bgm-player');

viewport.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        viewport.scrollLeft += e.deltaY;
        e.preventDefault();
    }
});

// 【変更】図鑑の白枠を最初から「？」で表示させ、全20種あることを明示する
function openEncyclopedia() {
    const grid = document.getElementById('encyclopedia-grid');
    grid.innerHTML = '';
    
    unitKeys.forEach(type => {
        const data = UNIT_TYPES[type];
        
        const countBlack = state.defeatedEnemies[type] || 0;
        const isKnownBlack = countBlack > 0;
        const cardBlack = document.createElement('div');
        cardBlack.className = 'enemy-card' + (isKnownBlack ? '' : ' unknown');
        if (isKnownBlack) {
            cardBlack.innerHTML = `
                <div class="enemy-icon" style="font-size: ${Math.floor(data.font * 0.8)}px;">${data.chessName}</div>
                <div>
                    <div style="font-weight: bold; color: #b71c1c; font-size: 16px;">${data.chessName} (撃破数: ${countBlack})</div>
                    <div style="font-size: 12px; color: #555; margin-top: 4px;">体力: ${Math.floor(data.hp * 1.5)} / 攻撃: ${Math.floor(data.attack * 1.5)}</div>
                    <div style="font-size: 12px; color: #333; margin-top: 6px;">${data.chessDesc}</div>
                </div>
            `;
        } else {
            cardBlack.innerHTML = `<div class="enemy-icon">？</div><div><div style="font-weight: bold; font-size: 16px;">？？？</div><div style="font-size: 12px; margin-top: 4px;">まだ遭遇・撃破していません。</div></div>`;
        }
        grid.appendChild(cardBlack);

        // 白枠も常に生成
        const whiteKey = type + '_white';
        const countWhite = state.defeatedEnemies[whiteKey] || 0;
        const isKnownWhite = countWhite > 0;
        const cardWhite = document.createElement('div');
        cardWhite.className = 'enemy-card' + (isKnownWhite ? '' : ' unknown');
        
        if (isKnownWhite) {
            cardWhite.innerHTML = `
                <div class="enemy-icon" style="font-size: ${Math.floor(data.font * 0.7)}px; background: linear-gradient(135deg, #ffffff, #f0f0f0); color: #111; border-color: #333; text-shadow: none;">W-${data.chessName}</div>
                <div>
                    <div style="font-weight: bold; color: #e65100; font-size: 16px;">White ${data.chessName} ✨ (撃破数: ${countWhite})</div>
                    <div style="font-size: 12px; color: #e65100; margin-top: 4px; font-weight: bold;">体力: ${Math.floor(data.hp * 1.5 * 3)} / 攻撃: ${Math.floor(data.attack * 1.5 * 3)} <span style="color:#d32f2f;">[能力3倍]</span></div>
                    <div style="font-size: 12px; color: #333; margin-top: 6px;">チェス軍の精鋭白銀駒。単純な戦闘能力が黒い駒の3倍へと強化されている。</div>
                </div>
            `;
        } else {
            cardWhite.innerHTML = `
                <div class="enemy-icon" style="background: #ccc; color: #999;">？</div>
                <div>
                    <div style="font-weight: bold; font-size: 16px;">White ？？？ (未確認)</div>
                    <div style="font-size: 12px; margin-top: 4px; color:#c62828; font-weight:bold;">後半の激戦区に出現する強さ3倍の白銀精鋭。</div>
                </div>
            `;
        }
        grid.appendChild(cardWhite);
    });
    
    document.getElementById('encyclopedia-overlay').style.display = 'flex';
}

function closeEncyclopedia() {
    document.getElementById('encyclopedia-overlay').style.display = 'none';
}

function getLevelUpCost(type) {
    const level = state.unitLevels[type];
    if (level >= MAX_LEVEL) return "MAX";
    return Math.floor(UNIT_TYPES[type].cost * level * 1.5);
}

function getBaseUpgradeCost(type) {
    const level = state.baseUpgrades[type];
    if (level >= MAX_LEVEL) return "MAX";
    return level * 500; 
}

function getBaseMaxFunds() {
    return 1000 + (state.baseUpgrades.initialWallet - 1) * 500;
}

function unlockUnit(type) {
    const cost = UNIT_TYPES[type].unlockXp;
    if (state.playerXP >= cost) {
        state.playerXP -= cost;
        state.unlockedUnits[type] = true;
        drawMenus();
    }
}

function levelUpUnit(type) {
    const cost = getLevelUpCost(type);
    if (cost !== "MAX" && state.playerXP >= cost) {
        state.playerXP -= cost;
        state.unitLevels[type]++;
        drawMenus();
    }
}

function upgradeBase(type) {
    const cost = getBaseUpgradeCost(type);
    if (cost !== "MAX" && state.playerXP >= cost) {
        state.playerXP -= cost;
        state.baseUpgrades[type]++;
        drawMenus();
    }
}

function drawMenus() {
    document.getElementById('xp-display').innerText = `所持XP: ${state.playerXP}`;

    const sList = document.getElementById('stage-list');
    sList.innerHTML = ''; 
    for (let i = 1; i <= 15; i++) {
        const btn = document.createElement('button');
        btn.className = 'stage-select-btn' + (i === 15 ? ' boss' : '');
        if (i <= state.unlockedStage) {
            btn.innerText = STAGE_CONFIGS[i].name;
            btn.onclick = () => startBattle(i, false);
        } else {
            btn.innerText = `🔒 ステージ ${i} (未開放)`;
            btn.disabled = true;
        }
        sList.appendChild(btn);
    }

    const eList = document.getElementById('event-stage-list');
    eList.innerHTML = ''; 
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'stage-select-btn event-btn';
        if (i <= state.unlockedEventStage) {
            btn.innerText = EVENT_STAGE_CONFIGS[i].name;
            btn.onclick = () => startBattle(i, true);
        } else {
            btn.innerText = `🔒 イベント ${i} (未開放)`;
            btn.disabled = true;
        }
        eList.appendChild(btn);
    }

    const bList = document.getElementById('base-upgrade-list');
    bList.innerHTML = '';
    ['fundSpeed', 'towerHp', 'initialWallet'].forEach(type => {
        const level = state.baseUpgrades[type];
        const cost = getBaseUpgradeCost(type);
        const isMax = level >= MAX_LEVEL;
        
        let title, desc;
        if(type === 'fundSpeed') {
            title = "資金スピードUP"; desc = `現在: 追加資金 +${(level-1)*0.5} /秒`;
        } else if(type === 'towerHp') {
            title = "タワー体力UP"; desc = `現在: 最大HP ${2000 + (level-1)*1000}`;
        } else {
            title = "初期財布上限UP"; desc = `現在: 初期上限 ${1000 + (level-1)*500}`;
        }

        const item = document.createElement('div');
        item.className = 'upgrade-item base-type';
        item.innerHTML = `
            <div>
                <div class="unit-info">${title} <span style="color:#f57f17">Lv.${level}</span></div>
                <div class="unit-stats">${desc}</div>
            </div>
        `;
        
        const btn = document.createElement('button');
        btn.className = 'upgrade-btn';
        if (isMax) {
            btn.innerText = "MAX"; btn.disabled = true;
        } else {
            btn.innerText = `強化 (-${cost})`;
            if (state.playerXP < cost) btn.disabled = true;
            btn.onclick = () => upgradeBase(type);
        }
        item.appendChild(btn);
        bList.appendChild(item);
    });

    const uList = document.getElementById('upgrade-list');
    uList.innerHTML = '';
    unitKeys.forEach(type => {
        const data = UNIT_TYPES[type];
        const item = document.createElement('div');
        
        if (state.unlockedUnits[type]) {
            const level = state.unitLevels[type];
            const isPromoted = level >= 10;
            item.className = 'upgrade-item' + (isPromoted ? ' evolved' : '');
            
            const cost = getLevelUpCost(type);
            const isMax = level >= MAX_LEVEL;
            
            let statMult = 1 + ((level - 1) * 0.3);
            if (isPromoted) statMult *= 2.5; 

            const currentHP = Math.floor(data.hp * statMult);
            const currentAtk = Math.floor(data.attack * statMult);
            const displayName = isPromoted ? data.promotedName : type;
            const nameColor = isPromoted ? '#d32f2f' : '#1976d2';

            item.innerHTML = `
                <div>
                    <div class="unit-info" style="color:${nameColor}">${displayName} <span style="font-size:12px;">Lv.${level}</span> ${isPromoted ? '✨' : ''}</div>
                    <div class="unit-stats">HP: ${currentHP} / 攻撃: ${currentAtk}</div>
                    <div class="unit-desc">${data.desc}</div>
                </div>
            `;
            
            const btn = document.createElement('button');
            btn.className = 'upgrade-btn';
            if (isMax) {
                btn.innerText = "MAX"; btn.disabled = true;
            } else {
                btn.innerText = (level === 9) ? `進化！ (-${cost})` : `強化 (-${cost})`;
                if (state.playerXP < cost) btn.disabled = true;
                btn.onclick = () => levelUpUnit(type);
            }
            item.appendChild(btn);
        } 
        else if (state.unlockedStage > data.reqStage) {
            item.className = 'upgrade-item';
            item.innerHTML = `
                <div>
                    <div class="unit-info" style="color:#e65100;">🆕 新しい駒: ${type}</div>
                    <div class="unit-stats">基本コスト: ¥${data.cost}</div>
                    <div class="unit-desc">${data.desc}</div>
                </div>
            `;
            const btn = document.createElement('button');
            btn.className = 'upgrade-btn unlock-btn';
            btn.innerText = `解放 (-${data.unlockXp})`;
            if (state.playerXP < data.unlockXp) btn.disabled = true;
            btn.onclick = () => unlockUnit(type);
            item.appendChild(btn);
        } 
        else {
            item.className = 'upgrade-item locked';
            item.innerHTML = `
                <div>
                    <div class="unit-info">🔒 ${type} (未解放)</div>
                    <div class="unit-stats">本編ステージ ${data.reqStage} クリアで解放</div>
                </div>
            `;
        }
        
        uList.appendChild(item);
    });
}
drawMenus();

function createBattleButtons() {
    buttonContainer.innerHTML = ''; 
    unitKeys.forEach(type => {
        if (state.unlockedUnits[type]) {
            const data = UNIT_TYPES[type];
            const level = state.unitLevels[type];
            const isPromoted = level >= 10;
            const displayName = isPromoted ? data.promotedName : type;

            const btn = document.createElement('button');
            btn.className = 'spawn-btn' + (isPromoted ? ' evolved-btn' : '');
            btn.id = `btn-${type}`;
            btn.onclick = () => spawnUnit('p2', type);
            
            btn.innerHTML = `
                <div class="cooldown-bar" id="cd-bar-${type}"></div>
                <div class="btn-content">
                    <span class="btn-lv">Lv.${level}</span>
                    ${displayName}
                    <div class="btn-cost">¥${data.cost}</div>
                </div>
            `;
            buttonContainer.appendChild(btn);
        }
    });
}

function startBattle(stageNum, isEvent) {
    state.isEventStage = isEvent;
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('battle-screen').style.display = 'block';
    
    const config = isEvent ? EVENT_STAGE_CONFIGS[stageNum] : STAGE_CONFIGS[stageNum];
    bgmPlayer.src = config.bgm;
    bgmPlayer.play().catch(e => {});

    createBattleButtons(); 
    initStage(stageNum);
}

function returnToMenu() {
    state.isGameOver = true;
    if (state.animationId) cancelAnimationFrame(state.animationId);
    bgmPlayer.pause(); 
    drawMenus(); 
    
    document.getElementById('stage-result-overlay').style.display = 'none';
    const baseP1 = document.getElementById('base-p1');
    const baseP2 = document.getElementById('base-p2');
    if(baseP1) baseP1.classList.remove('collapsed-base-p1');
    if(baseP2) baseP2.classList.remove('collapsed-base-p2');

    document.getElementById('battle-screen').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
}

// 【追加】エピローグ演出の管理関数
function showEpilogue(xp) {
    document.getElementById('epilogue-overlay').style.display = 'flex';
    epilogueTimeout = setTimeout(() => {
        skipEpilogue(xp);
    }, 15000); // 15秒後に自動でリザルトへ
}

function skipEpilogue(xp = null) {
    clearTimeout(epilogueTimeout);
    document.getElementById('epilogue-overlay').style.display = 'none';
    
    // 引数XPがない場合（ボタンから呼ばれた時用）、現在のステージのXPを取得
    if (xp === null) {
        xp = STAGE_CONFIGS[state.currentStage].xpReward;
    }
    
    // エピローグの後は「初クリア」フラグを外して通常のリザルトを表示
    showResultOverlay(true, xp, false); 
}

// 【変更】新キャラ解放のテキスト表示条件を「初めてそのステージをクリアした時」に限定
function showResultOverlay(isClear, xp, isFirstClear = false) {
    const overlay = document.getElementById('stage-result-overlay');
    const title = document.getElementById('result-title');
    const xpText = document.getElementById('result-xp');
    const unlockText = document.getElementById('result-unlock');
    
    if (isClear) {
        title.innerText = state.isEventStage ? `イベント防衛 成功！` : `ステージ ${state.currentStage} クリア！`;
        title.style.color = '#ffeb3b';
        xpText.innerText = `経験値 +${xp.toLocaleString()} XP`;
        xpText.style.display = 'block';
        
        // 初クリア かつ そのステージで解放される駒がある場合のみテキスト表示
        let newlyAvailable = false;
        if (!state.isEventStage && isFirstClear) {
            newlyAvailable = unitKeys.some(type => UNIT_TYPES[type].reqStage === state.currentStage);
        }
        unlockText.style.display = newlyAvailable ? 'block' : 'none';
    } else {
        title.innerText = `自陣陥落...`;
        title.style.color = '#e53935';
        xpText.style.display = 'none';
        unlockText.style.display = 'none';
    }
    
    overlay.style.display = 'flex';
}

function initStage(stageNum) {
    state.units.forEach(u => u.element.remove());
    const config = state.isEventStage ? EVENT_STAGE_CONFIGS[stageNum] : STAGE_CONFIGS[stageNum];
    state.currentStage = stageNum;
    
    state.p1.hp = config.enemyHp;
    state.p1.funds = 0;
    
    state.p2.hp = 2000 + (state.baseUpgrades.towerHp - 1) * 1000; 
    state.p2.funds = 0;
    
    state.walletLevel = 1;
    state.p2.maxFunds = getBaseMaxFunds();
    
    const walletBtn = document.getElementById('wallet-btn');
    if(walletBtn) {
        walletBtn.onclick = () => {
            const cost = state.walletLevel * 300;
            if (state.p2.funds >= cost && state.walletLevel < MAX_LEVEL) {
                state.p2.funds -= cost;
                state.walletLevel++;
                state.p2.maxFunds = getBaseMaxFunds() + (state.walletLevel - 1) * 800; 
            }
        };
    }
    
    unitKeys.forEach(type => {
        state.p1Cooldowns[type] = 0;
        state.p2Cooldowns[type] = 0;
    });
    
    stageContainer.style.width = config.stageWidth + 'px';
    const baseP2El = document.getElementById('base-p2');
    if(baseP2El) baseP2El.style.left = (config.stageWidth - 90) + 'px';
    
    setTimeout(() => { viewport.scrollLeft = viewport.scrollWidth; }, 10);

    state.units = [];
    state.isGameOver = false;
    const stageNameEl = document.getElementById('stage-name-display');
    if(stageNameEl) stageNameEl.innerText = config.name;
    
    const hpP1El = document.getElementById('hp-p1');
    const hpP2El = document.getElementById('hp-p2');
    if(hpP1El) hpP1El.innerText = state.p1.hp;
    if(hpP2El) hpP2El.innerText = state.p2.hp;

    if (state.isEventStage) {
        const enemyType = config.enemyType;
        const unitData = UNIT_TYPES[enemyType];
        for (let i = 0; i < 10; i++) {
            let offset = -i * (unitData.size * 1.2 + 10); 
            
            let spawnWhite = false;
            if (stageNum >= 6 && i < (stageNum - 5) * 2) {
                spawnWhite = true; 
            }
            spawnUnit('p1', enemyType, true, offset, spawnWhite);
        }
    }

    if (state.animationId) cancelAnimationFrame(state.animationId);
    gameLoop();
}

function spawnUnit(player, type, forceSpawn = false, xOffset = 0, spawnWhite = false) {
    if (state.isGameOver) return;
    const unitData = UNIT_TYPES[type];
    const currentConfig = state.isEventStage ? EVENT_STAGE_CONFIGS[state.currentStage] : STAGE_CONFIGS[state.currentStage];
    
    let cdObj = player === 'p1' ? state.p1Cooldowns : state.p2Cooldowns;
    
    if (!forceSpawn && cdObj[type] > 0) return; 
    if (!forceSpawn && state[player].funds < unitData.cost) return; 
    
    if (!forceSpawn) {
        state[player].funds -= unitData.cost; 
        cdObj[type] = unitData.spawnCooldown; 
    }
    
    const el = document.createElement('div');
    el.className = `unit ${player}`;
    stageContainer.appendChild(el);

    let finalHp = unitData.hp;
    let finalAtk = unitData.attack;

    if (player === 'p2') {
        let level = state.unitLevels[type];
        let isPromoted = level >= 10;
        
        el.innerText = isPromoted ? unitData.promotedName : type;
        el.classList.add('unit-shogi');
        el.style.width = unitData.size + 'px';
        el.style.height = (unitData.size * 1.3) + 'px'; 
        el.style.fontSize = unitData.font + 'px';
        el.style.background = `linear-gradient(135deg, ${unitData.color1}, ${unitData.color2})`;
        el.style.color = isPromoted ? '#d32f2f' : '#111';

        let statMult = 1 + ((level - 1) * 0.3);
        if (isPromoted) statMult *= 2.5;
        
        finalHp = Math.floor(finalHp * statMult);
        finalAtk = Math.floor(finalAtk * statMult);
    } else {
        el.classList.add('unit-chess');
        el.style.width = (unitData.size * 1.1) + 'px';
        el.style.height = (unitData.size * 1.2) + 'px'; 
        el.style.fontSize = Math.floor(unitData.font * 0.8) + 'px';
        
        if (spawnWhite) {
            el.innerText = "W-" + unitData.chessName;
            el.style.background = `linear-gradient(135deg, #ffffff, #f0f0f0)`;
            el.style.color = '#111';
            el.style.borderColor = '#333';
            el.style.textShadow = '1px 1px 1px rgba(0,0,0,0.3)';
            
            finalHp = Math.floor(finalHp * 1.5 * 3); 
            finalAtk = Math.floor(finalAtk * 1.5 * 3);
        } else {
            el.innerText = unitData.chessName;
            finalHp = Math.floor(finalHp * 1.5);
            finalAtk = Math.floor(finalAtk * 1.5);
        }
    }
    
    let nextKnockback = unitData.size >= 65 ? 0.8 : -1;
    let defaultX = player === 'p1' ? 70 : (currentConfig.stageWidth - 70 - unitData.size);

    state.units.push({
        player: player,
        type: type,
        hp: finalHp,
        maxHp: finalHp,
        attack: finalAtk,
        speed: player === 'p1' ? unitData.speed : -unitData.speed,
        x: defaultX + xOffset, 
        size: unitData.size,
        maxCooldown: unitData.maxCooldown, 
        aoe: unitData.aoe, 
        multiHit: unitData.multiHit, 
        range: unitData.range,
        noReward: unitData.noReward,
        nextKnockback: nextKnockback,
        element: el,
        cooldown: 0,
        isDying: false,
        deathTimer: 0,
        isWhite: spawnWhite 
    });
}

function damageUnit(target, dmg, stageWidth) {
    target.hp -= dmg;
    
    if (target.hp > 0 && target.nextKnockback > 0) {
        let hpRatio = target.hp / target.maxHp;
        while (hpRatio <= target.nextKnockback && target.nextKnockback > 0) {
            target.nextKnockback -= 0.2; 
            
            const kbDist = 100;
            if (target.player === 'p1') {
                target.x = Math.max(70, target.x - kbDist);
            } else {
                target.x = Math.min(stageWidth - 70 - target.size, target.x + kbDist);
            }
            
            target.element.style.filter = 'brightness(2) sepia(1) hue-rotate(-50deg) saturate(5)';
            setTimeout(() => { if (target.element && !target.isDying) target.element.style.filter = 'drop-shadow(2px 3px 3px rgba(0,0,0,0.6))'; }, 200);
            
            target.cooldown = Math.max(target.cooldown, 45);
        }
    }
}

function performAttackAnim(attacker) {
    attacker.cooldown = attacker.maxCooldown; 
    const bounceDirection = attacker.player === 'p1' ? 1 : -1;
    const bounceDist = (attacker.size * 0.8 * bounceDirection) + 'px';
    attacker.element.style.setProperty('--bounce-dist', bounceDist);

    attacker.element.classList.remove('attacking');
    void attacker.element.offsetWidth; 
    attacker.element.classList.add('attacking');

    return attacker.attack;
}

function gameLoop() {
    if (state.isGameOver) return;

    const currentConfig = state.isEventStage ? EVENT_STAGE_CONFIGS[state.currentStage] : STAGE_CONFIGS[state.currentStage];
    const stageWidth = currentConfig.stageWidth;

    state.p1.funds += currentConfig.enemyFundSpeed || 0;
    
    const fundSpeedBonus = (state.baseUpgrades.fundSpeed - 1) * 0.5 + (state.walletLevel - 1) * 0.8;
    state.p2.funds += (0.8 + fundSpeedBonus); 
    
    if (state.p2.funds > state.p2.maxFunds) {
        state.p2.funds = state.p2.maxFunds;
    }
    
    const p2FundsEl = document.getElementById('funds-p2');
    const maxFundsEl = document.getElementById('max-funds-p2');
    if(p2FundsEl) p2FundsEl.innerText = Math.floor(state.p2.funds);
    if(maxFundsEl) maxFundsEl.innerText = state.p2.maxFunds;

    const walletBtn = document.getElementById('wallet-btn');
    if(walletBtn) {
        if (state.walletLevel >= MAX_LEVEL) {
            walletBtn.innerHTML = `Lv.MAX`;
            walletBtn.disabled = true;
        } else {
            const wCost = state.walletLevel * 300;
            walletBtn.innerHTML = `Lv.${state.walletLevel}<br><span style="color: #ffeb3b; font-size:16px;">¥${wCost}</span>`;
            walletBtn.disabled = state.p2.funds < wCost;
        }
    }

    unitKeys.forEach(type => {
        if (state.p1Cooldowns[type] > 0) state.p1Cooldowns[type]--;
        if (state.p2Cooldowns[type] > 0) state.p2Cooldowns[type]--;

        if (state.unlockedUnits[type]) {
            const btn = document.getElementById(`btn-${type}`);
            const cdBar = document.getElementById(`cd-bar-${type}`);
            if (btn && cdBar) {
                const maxCd = UNIT_TYPES[type].spawnCooldown;
                const currentCd = state.p2Cooldowns[type];
                
                const pct = maxCd > 0 ? (currentCd / maxCd) * 100 : 0;
                cdBar.style.height = pct + '%';

                if (state.p2.funds < UNIT_TYPES[type].cost || currentCd > 0) {
                    btn.disabled = true;
                } else {
                    btn.disabled = false;
                }
            }
        }
    });

    if (!state.isEventStage) {
        let maxUnlockedIndex = 0;
        unitKeys.forEach((type, index) => {
            if (state.unlockedUnits[type]) maxUnlockedIndex = index;
        });

        if (Math.random() < currentConfig.enemySpawnRate) {
            let availableEnemies = unitKeys.slice(0, maxUnlockedIndex + 1).filter(type => 
                state.p1Cooldowns[type] <= 0 && 
                state.p1.funds >= UNIT_TYPES[type].cost
            );
            
            if (state.currentStage === 1) {
                availableEnemies = availableEnemies.filter(type => type === '歩');
            }
            
            if (availableEnemies.length > 0) {
                const randomType = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
                
                let spawnWhite = false;
                if (state.currentStage >= 8 && Math.random() < 0.3) {
                    spawnWhite = true;
                }
                spawnUnit('p1', randomType, false, 0, spawnWhite);
            }
        }
    }

    for (let i = 0; i < state.units.length; i++) {
        let u1 = state.units[i];
        if (u1.isDying) { u1.deathTimer--; continue; }

        if (u1.hp <= 0) {
            u1.isDying = true;
            u1.deathTimer = 24; 
            u1.element.classList.remove('attacking');
            u1.element.classList.add(u1.player === 'p1' ? 'dying-p1' : 'dying-p2');

            if (u1.player === 'p1') {
                const dictKey = u1.isWhite ? (u1.type + '_white') : u1.type;
                state.defeatedEnemies[dictKey] = (state.defeatedEnemies[dictKey] || 0) + 1;
            }

            if (!u1.noReward) {
                let reward = Math.floor(UNIT_TYPES[u1.type].cost / 2);
                if (u1.player === 'p1') {
                    state.p2.funds += reward;
                    if (state.p2.funds > state.p2.maxFunds) state.p2.funds = state.p2.maxFunds;
                } else {
                    state.p1.funds += reward;
                }
            }
            continue;
        }

        let canMove = true;
        let targetsToHit = [];
        let center1 = u1.x + u1.size/2;
        let attackRange = u1.range || 0;

        const p2BaseX = stageWidth - 90;
        const p1BaseX = 90;
        let baseDist = u1.player === 'p1' ? (p2BaseX - (u1.x + u1.size)) : (u1.x - p1BaseX);
        let hitBase = false;

        if (baseDist <= attackRange) {
            canMove = false;
            hitBase = true;
        }

        for (let j = 0; j < state.units.length; j++) {
            let u2 = state.units[j];
            if (i === j || u2.hp <= 0 || u2.isDying) continue; 

            if (u1.player !== u2.player) {
                let center2 = u2.x + u2.size/2;
                let distToEnemy = Math.abs(center1 - center2) - (u1.size/2 + u2.size/2);
                
                if (distToEnemy <= attackRange) { 
                    canMove = false;
                    targetsToHit.push(u2);
                }
            }
        }

        if (!canMove && u1.cooldown <= 0) {
            let dmg = performAttackAnim(u1);
            
            targetsToHit.sort((a, b) => {
                return Math.abs(center1 - (a.x + a.size/2)) - Math.abs(center1 - (b.x + b.size/2));
            });

            if (u1.aoe > 0) {
                let attackCenter = u1.player === 'p1' ? (u1.x + u1.size + attackRange) : (u1.x - attackRange);
                if (targetsToHit.length > 0) {
                    attackCenter = targetsToHit[0].x + targetsToHit[0].size/2;
                } else if (hitBase) {
                    attackCenter = u1.player === 'p1' ? p2BaseX : p1BaseX;
                }

                state.units.forEach(otherU => {
                    if (otherU.player !== u1.player && otherU.hp > 0 && !otherU.isDying) {
                        let distToCenter = Math.abs((otherU.x + otherU.size/2) - attackCenter);
                        if (distToCenter - otherU.size/2 <= u1.aoe) {
                            damageUnit(otherU, dmg, stageWidth);
                        }
                    }
                });
                
                if (u1.player === 'p1' && Math.abs(p2BaseX - attackCenter) <= u1.aoe) state.p2.hp -= dmg;
                if (u1.player === 'p2' && Math.abs(p1BaseX - attackCenter) <= u1.aoe) state.p1.hp -= dmg;

            } else {
                let hitsLeft = u1.multiHit || 1;
                for (let k = 0; k < targetsToHit.length && hitsLeft > 0; k++) {
                    damageUnit(targetsToHit[k], dmg, stageWidth);
                    hitsLeft--;
                }
                if (hitBase && hitsLeft > 0) {
                    if (u1.player === 'p1') state.p2.hp -= dmg;
                    if (u1.player === 'p2') state.p1.hp -= dmg;
                }
            }
        }

        if (canMove) u1.x += u1.speed;
        if (u1.cooldown > 0) u1.cooldown--;

        if (!u1.isDying) {
            u1.element.style.left = u1.x + 'px';
        }
    }

    state.units = state.units.filter(u => {
        if (u.isDying && u.deathTimer <= 0) {
            u.element.remove();
            return false;
        }
        return true;
    });

    const hpP1El = document.getElementById('hp-p1');
    const hpP2El = document.getElementById('hp-p2');
    if(hpP1El) hpP1El.innerText = Math.max(0, state.p1.hp); 
    if(hpP2El) hpP2El.innerText = Math.max(0, state.p2.hp);

    // ================= 【変更】クリア判定とエピローグ演出 =================
    if (state.p1.hp <= 0 && !state.isGameOver) {
        state.isGameOver = true;
        
        let earnedXP = 0;
        let isFirstClear = false;
        let showEpilogueScreen = false;

        if (state.isEventStage) {
            if (state.currentStage === state.unlockedEventStage && state.unlockedEventStage < 10) {
                state.unlockedEventStage++; 
            }
            earnedXP = EVENT_STAGE_CONFIGS[state.currentStage].xpReward;
        } else {
            if (state.currentStage === state.unlockedStage) {
                if (state.unlockedStage <= 15) {
                    isFirstClear = true; // 新キャラアンロック表示用
                }
                if (state.unlockedStage < 15) {
                    state.unlockedStage++; 
                } else if (state.unlockedStage === 15) {
                    // ステージ15（ファイナル）を初めてクリアした！
                    state.unlockedStage = 16; // フラグを進める
                    showEpilogueScreen = true;
                }
            }
            earnedXP = STAGE_CONFIGS[state.currentStage].xpReward;
        }
        
        state.playerXP += earnedXP;

        const baseP1 = document.getElementById('base-p1');
        if(baseP1) baseP1.classList.add('collapsed-base-p1');

        setTimeout(() => {
            if (showEpilogueScreen) {
                showEpilogue(earnedXP); // エピローグ表示へ
            } else {
                showResultOverlay(true, earnedXP, isFirstClear); // 通常のリザルト画面へ
            }
        }, 1500);
        return;

    } else if (state.p2.hp <= 0 && !state.isGameOver) {
        state.isGameOver = true;
        
        const baseP2 = document.getElementById('base-p2');
        if(baseP2) baseP2.classList.add('collapsed-base-p2');

        setTimeout(() => {
            showResultOverlay(false, 0, false);
        }, 1500);
        return;
    }

    if (!state.isGameOver) {
        state.animationId = requestAnimationFrame(gameLoop);
    }
}