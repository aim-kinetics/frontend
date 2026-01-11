# AIMの教科書フロントエンドディレクトリ
これはNextアプリで作られています。  

# 環境構築

## VSCodeのインストール
大本となるエディタをインストールします  
https://code.visualstudio.com/  
こちらからダウンロードしてください  

できたら管理しやすいところにprojectフォルダを作成してください。  
管理者はデスクトップに作成しています。  
作成後VSCodeでprojectフォルダを開いてください。  

https://www.javadrive.jp/vscode/terminal/index1.html  
こちらを参考にterminalを開いて次の作業に進んでください。  
コマンドはすべてこのterminalに打ち込みます。  

## nodejsのインストール

まずはJavaScriptをパソコン上で動かすための環境としてnodejsというものを使用します。  
https://nodejs.org/en/download  
ここからインストールしてください。  
versionは24.12.0にしてください。

## スクリプト実行のポリシー設定
https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5  
上記サイトに詳しいことは書いていますがいったん下記コマンドでよさそう
```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
上記が設定出来たら一度
```shell
node -v
```
を実行して24.12.0が出たら成功です

## gitのインストール

https://gitforwindows.org/  
こちらからgitをインストールしてください。  
これはファイル管理システムです。  
詳しくは調べてください。 

```shell
git config --global user.name "ユーザー名"
git config --global user.email "メールアドレス"
```

## 公開鍵生成

githubに認証を行うためssh接続の設定をします。  
公開鍵認証で行います。  
```shell
dir $env:USERPROFILE\.ssh
ssh-keygen -t aim-kinetics -C "メールアドレス"
```

生成されたファイル(~/.ssh/id_aim-kinetics.pub)の中身を管理者に送信してください。  
設定完了後以下コマンドで成功するかどうか確認してください。  
```shell
ssh -T git@github.com
```

### リポジトリをクローンしてくる

gitが設定出来たらあとはリポジトリをクローンしてくるだけです。

```shell
git clone git@github.com:aim-kinetics/frontend.git
```