// ==UserScript==
// @name         Claude.ai & Gemini Disable Enter Send
// @version      0.1
// @description  Enterキーは改行のみ、送信はボタンクリックのみ
// @author       imgddotnet
// @match        https://claude.ai/*
// @match        https://gemini.google.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Enterキーでの送信を完全にブロック（改行は許可）
    const blockEnterSend = (e) => {
        if (e.key === 'Enter') {
            // 送信処理だけをブロック
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('🚫 Enter送信をブロック（改行は許可）');
        }
    };

    // キャプチャフェーズで送信処理をブロック
    document.addEventListener('keydown', blockEnterSend, true);
    document.addEventListener('keypress', blockEnterSend, true);
})();
