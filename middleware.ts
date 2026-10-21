// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // 静的アセット（画像やNext.jsの内部ファイル）以外のすべてのルートに適用
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  // 環境変数から取得（未設定時のデフォルトフォールバック付き）
  const USER = process.env.BASIC_AUTH_USER || 'gap';
  const PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'shibuya-HARAJUKU-2026';

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      if (authValue) {
        const [user, pwd] = atob(authValue).split(':');
        if (user === USER && pwd === PASSWORD) {
          return NextResponse.next();
        }
      }
    } catch {
      // 不正なBase64ヘッダーなどの例外時は401にフォールバック
    }
  }

  // 認証ダイアログを表示
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure GAP DLS Portal"',
    },
  });
}