import { NativeModules } from 'react-native';

export type FsStat = {
  internal_free: number;
  internal_total: number;
  external_free?: number;
  external_total?: number;
};

type FileAccessType = {
  CacheDir: string;
  DocumentDir: string;

  /**
   * Copy a file.
   */
  cp(source: string, target: string): Promise<void>;

  /**
   * Check device available space.
   */
  df(): Promise<FsStat>;

  /**
   * Check if a path exists.
   */
  exists(path: string): Promise<boolean>;

  /**
   * Save a network request to a file.
   */
  fetch(
    resource: string,
    init: {
      body?: string;
      headers?: { [key: string]: string };
      method?: string;
      /**
       * Output path.
       */
      path?: string;
    }
  ): Promise<{
    headers: { [key: string]: string };
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    url: string;
  }>;

  /**
   * Check if a path is a directory.
   */
  isDir(path: string): Promise<boolean>;

  /**
   * List files in a directory.
   */
  ls(path: string): Promise<string[]>;

  /**
   * Make a new directory.
   */
  mkdir(path: string): Promise<void>;

  /**
   * Move a file.
   */
  mv(source: string, target: string): Promise<void>;

  /**
   * Read the content of a file.
   */
  readFile(path: string): Promise<string>;

  /**
   * Delete a file.
   */
  unlink(path: string): Promise<void>;

  /**
   * Write content to a file.
   */
  writeFile(path: string, data: string): Promise<void>;
};

export const FileAccess: FileAccessType = NativeModules.RNFileAccess;
