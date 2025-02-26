// types.ts
export type RootStackParamList = {
    Home: undefined; // No parameters expected for the Home screen
    Details: undefined; // No parameters expected for the Details screen
    Category: { category: string }; // Add this line
  };