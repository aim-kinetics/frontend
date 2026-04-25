class ReactionSpeedTest {
    constructor() {
        this.currentScreen = 'start';
        this.test2Results = [];
        this.test2StartTime = 0;
        this.currentNumber = 0;
        this.isTargetNumber = false;
        this.test2Interval = null;
        this.test2Timer = null;
        this.breakTimer = null;
        this.numberChangeInterval = null;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.screens = {
            start: document.getElementById('start-screen'),
            break: document.getElementById('break-screen'),
            test2: document.getElementById('test2-screen'),
            result: document.getElementById('result-screen')
        };
        
        this.elements = {
            startBtn: document.getElementById('start-btn'),
            restartBtn: document.getElementById('restart-btn'),
            fixedNumber: document.getElementById('fixed-number'),
            movingRedSquare: document.getElementById('moving-red-square'),
            test2Timer: document.getElementById('test2-timer'),
            breakCountdown: document.getElementById('break-countdown'),
            test2Avg: document.getElementById('test2-avg'),
            test2Count: document.getElementById('test2-count'),
            test2Checkbox: document.getElementById('test2-checkbox')
        };
    }

    bindEvents() {
        this.elements.startBtn.addEventListener('click', () => this.startTest());
        this.elements.restartBtn.addEventListener('click', () => this.restartTest());
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // スタート画面でEnterキーを押したときの処理
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.currentScreen === 'start') {
                this.startTest();
            }
        });
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');
        this.currentScreen = screenName;
    }

    startTest() {
        this.showScreen('break');
        this.startTest2Break();
    }

    startTest2Break() {
        let countdown = 5;
        this.elements.breakCountdown.textContent = countdown;
        
        this.breakTimer = setInterval(() => {
            countdown--;
            this.elements.breakCountdown.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(this.breakTimer);
                this.showScreen('test2');
                this.startTest2();
            }
        }, 1000);
    }





    startTest2() {
        let timeLeft = 60;
        this.test2Results = [];
        this.isTargetNumber = false;
        
        // タイマー開始
        this.test2Timer = setInterval(() => {
            timeLeft--;
            this.elements.test2Timer.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(this.test2Timer);
                this.endTest2();
            }
        }, 1000);

        // 固定位置での色変更開始
        this.startFixedNumberChange();
        
        // 赤い四角の移動開始
        this.startMovingRedSquare();
    }

    startFixedNumberChange() {
        const colors = ['red', 'green', 'blue'];
        
        const changeColor = () => {
            let newColor;
            do {
                newColor = colors[Math.floor(Math.random() * colors.length)];
            } while (newColor === this.currentNumber);
            
            this.currentNumber = newColor;
            this.elements.fixedNumber.style.backgroundColor = this.currentNumber;
            this.isTargetNumber = (this.currentNumber === 'blue');
            
            if (this.isTargetNumber) {
                this.test2StartTime = Date.now();
            }
        };

        // 初期色設定
        changeColor();
        
        // 0.5秒ごとに色を変更
        setTimeout(() => {
            changeColor();
        this.numberChangeInterval = setInterval(changeColor, 1000);
    }, 50);
    }

    startMovingRedSquare() {
        const moveRedSquare = () => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            this.elements.movingRedSquare.style.left = x + '%';
            this.elements.movingRedSquare.style.top = y + '%';
        };

        // 初期位置設定
        moveRedSquare();
        
        // 最初の位置変更は125ms後、その後は250ms間隔
            this.test2Interval = setInterval(moveRedSquare, 1000);
    }

    endTest2() {
        clearInterval(this.numberChangeInterval);
        clearInterval(this.test2Interval);
        this.showResults();
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.isTargetNumber) {
            if (this.currentScreen === 'test1') {
                this.recordTest1Result();
            } else if (this.currentScreen === 'test2') {
                this.recordTest2Result();
            }
        }
    }

    recordTest1Result() {
        const reactionTime = Date.now() - this.test1StartTime;
        this.test1Results.push(reactionTime);
        this.isTargetNumber = false;
    }

    recordTest2Result() {
        const reactionTime = Date.now() - this.test2StartTime;
        this.test2Results.push(reactionTime);
        this.isTargetNumber = false;
    }

    showResults() {
        // 外れ値を除外した平均値を計算する関数
        const calculateTrimmedAverage = (results) => {
            if (results.length <= 4) {
                // 4回以下の場合は全データを使用
                return results.length > 0 ? 
                    Math.round(results.reduce((a, b) => a + b, 0) / results.length) : 0;
            }
            
            // 結果を昇順にソート
            const sortedResults = [...results].sort((a, b) => a - b);
            
            // 上位2回と下位2回を除外
            const trimmedResults = sortedResults.slice(2, -2);
            
            // 除外されたデータの平均を計算
            return Math.round(trimmedResults.reduce((a, b) => a + b, 0) / trimmedResults.length);
        };

        const test2Avg = calculateTrimmedAverage(this.test2Results);

        this.elements.test2Avg.textContent = test2Avg;
        this.elements.test2Count.textContent = this.test2Results.length;

        this.showScreen('result');
    }

    restartTest() {
        // タイマーとインターバルをクリア
        if (this.test2Timer) clearInterval(this.test2Timer);
        if (this.breakTimer) clearInterval(this.breakTimer);
        if (this.test2Interval) clearInterval(this.test2Interval);
        if (this.numberChangeInterval) clearInterval(this.numberChangeInterval);

        // 結果をリセット
        this.test2Results = [];
        this.isTargetNumber = false;
        
        // チェックボックスをデフォルト状態にリセット
        this.elements.test2Checkbox.checked = true;

        // 初期画面に戻る
        this.showScreen('start');
        
        // タイマー表示をリセット
        this.elements.test2Timer.textContent = '60';
        this.elements.breakCountdown.textContent = '5';
    }
}

// アプリケーション開始
document.addEventListener('DOMContentLoaded', () => {
    new ReactionSpeedTest();
});
