export interface Response<T> {
  record:   T;
  metadata: Metadata;
}

export interface Metadata {
  id:        string;
  private:   boolean;
  createdAt: Date;
}