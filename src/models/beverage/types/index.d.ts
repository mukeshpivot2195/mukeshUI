declare interface IBeverageOptions {
  name: string;
  icon: string;
  color: string;
}

declare interface IBeverageModel extends IBeverageOptions, IKosDataModel {
  id: string;
}
