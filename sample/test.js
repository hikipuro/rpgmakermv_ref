/*
 * ローカルのテスト環境用コード例
 */

// save/config.rpgsave をデコードして表示する
// (WebInspector のコンソール画面で実行)
StorageManager.loadFromLocalFile(-1);

// save/global.rpgsave をデコードして表示する
// (WebInspector のコンソール画面で実行)
StorageManager.loadFromLocalFile(0);

// save/file1.rpgsave をデコードして表示する
// (WebInspector のコンソール画面で実行)
StorageManager.loadFromLocalFile(1);
