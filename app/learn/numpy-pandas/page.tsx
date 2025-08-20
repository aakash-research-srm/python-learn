import { ModuleContent } from "@/components/module-content"
import { CodeExample } from "@/components/code-example"
import { Quiz } from "@/components/quiz"
import { quizData } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NumpyPandasPage = () => {
  return (
    <ModuleContent
      title="NumPy & Pandas"
      description="Explore powerful libraries for numerical computing and data analysis in Python."
    >
      <div className="space-y-8">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NumPy - Numerical Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              NumPy is the fundamental package for scientific computing in Python. It provides support for large,
              multi-dimensional arrays and matrices, along with mathematical functions to operate on them.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Key Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• N-dimensional array objects</li>
                  <li>• Broadcasting functions</li>
                  <li>• Mathematical operations</li>
                  <li>• Linear algebra functions</li>
                  <li>• Random number generation</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Array Operations</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">reshape()</Badge> Change array shape
                  </li>
                  <li>
                    <Badge variant="outline">sum()</Badge> Calculate sum
                  </li>
                  <li>
                    <Badge variant="outline">mean()</Badge> Calculate average
                  </li>
                  <li>
                    <Badge variant="outline">max()</Badge> Find maximum
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="NumPy Basics"
          code={`import numpy as np

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

print("1D Array:", arr1)
print("2D Array:")
print(arr2)

# Array properties
print(f"\\nArray shape: {arr2.shape}")
print(f"Array size: {arr2.size}")
print(f"Data type: {arr2.dtype}")

# Creating special arrays
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
identity = np.eye(3)
random_array = np.random.random((2, 3))

print("\\nZeros array:")
print(zeros)
print("\\nRandom array:")
print(random_array)

# Array operations
numbers = np.array([1, 2, 3, 4, 5])
print(f"\\nOriginal: {numbers}")
print(f"Squared: {numbers ** 2}")
print(f"Sum: {np.sum(numbers)}")
print(f"Mean: {np.mean(numbers)}")
print(f"Standard deviation: {np.std(numbers)}")

# Array indexing and slicing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"\\nMatrix:")
print(matrix)
print(f"Element at [1,1]: {matrix[1, 1]}")
print(f"First row: {matrix[0, :]}")
print(f"Last column: {matrix[:, -1]}")

# Boolean indexing
data = np.array([1, 5, 3, 8, 2, 7])
print(f"\\nData: {data}")
print(f"Values > 4: {data[data > 4]}")
print(f"Even values: {data[data % 2 == 0]}")`}
          language="python"
        />

        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Pandas - Data Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Pandas is a powerful data manipulation and analysis library. It provides data structures like DataFrames
              and Series, making it easy to work with structured data.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Core Data Structures</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Badge variant="outline">Series</Badge> 1D labeled array
                  </li>
                  <li>
                    <Badge variant="outline">DataFrame</Badge> 2D labeled data structure
                  </li>
                  <li>
                    <Badge variant="outline">Index</Badge> Axis labels
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Key Operations</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Data loading and saving</li>
                  <li>• Data cleaning and transformation</li>
                  <li>• Grouping and aggregation</li>
                  <li>• Merging and joining</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Pandas DataFrames"
          code={`import pandas as pd
import numpy as np

# Creating a DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['New York', 'London', 'Tokyo', 'Paris'],
    'Salary': [50000, 60000, 70000, 55000]
}

df = pd.DataFrame(data)
print("DataFrame:")
print(df)

# Basic information
print(f"\\nShape: {df.shape}")
print(f"Columns: {list(df.columns)}")
print("\\nData types:")
print(df.dtypes)

# Selecting data
print(f"\\nNames: {df['Name'].tolist()}")
print("\\nFirst 2 rows:")
print(df.head(2))

# Filtering data
high_salary = df[df['Salary'] > 55000]
print("\\nEmployees with salary > 55000:")
print(high_salary)

# Adding new columns
df['Bonus'] = df['Salary'] * 0.1
df['Total'] = df['Salary'] + df['Bonus']
print("\\nDataFrame with bonus:")
print(df)

# Statistical operations
print("\\nSalary statistics:")
print(df['Salary'].describe())

# Grouping data
city_stats = df.groupby('City')['Salary'].mean()
print("\\nAverage salary by city:")
print(city_stats)

# Working with missing data
df_with_na = df.copy()
df_with_na.loc[1, 'Age'] = np.nan
print("\\nDataFrame with missing value:")
print(df_with_na)
print("\\nAfter filling missing values:")
print(df_with_na.fillna(df_with_na.mean()))`}
          language="python"
        />

        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Data Analysis Workflow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A typical data analysis workflow involves loading data, exploring it, cleaning it, analyzing it, and
              visualizing the results.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Badge className="mb-2">Load</Badge>
                <p className="text-sm">Import data from various sources</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Badge className="mb-2">Clean</Badge>
                <p className="text-sm">Handle missing values and errors</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Badge className="mb-2">Analyze</Badge>
                <p className="text-sm">Extract insights and patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeExample
          title="Data Analysis Example"
          code={`import pandas as pd
import numpy as np

# Create sample sales data
np.random.seed(42)
dates = pd.date_range('2024-01-01', periods=100, freq='D')
products = ['Laptop', 'Phone', 'Tablet', 'Watch']
regions = ['North', 'South', 'East', 'West']

sales_data = []
for _ in range(500):
    sales_data.append({
        'Date': np.random.choice(dates),
        'Product': np.random.choice(products),
        'Region': np.random.choice(regions),
        'Sales': np.random.randint(1000, 10000),
        'Quantity': np.random.randint(1, 50)
    })

df = pd.DataFrame(sales_data)
print("Sales Data Sample:")
print(df.head())

# Data exploration
print(f"\\nDataset shape: {df.shape}")
print("\\nSummary statistics:")
print(df.describe())

# Sales by product
product_sales = df.groupby('Product')['Sales'].agg(['sum', 'mean', 'count'])
print("\\nSales by Product:")
print(product_sales)

# Sales by region
region_sales = df.groupby('Region')['Sales'].sum().sort_values(ascending=False)
print("\\nSales by Region:")
print(region_sales)

# Monthly sales trend
df['Month'] = df['Date'].dt.to_period('M')
monthly_sales = df.groupby('Month')['Sales'].sum()
print("\\nMonthly Sales:")
print(monthly_sales.head())

# Top performing combinations
top_combinations = df.groupby(['Product', 'Region'])['Sales'].sum().sort_values(ascending=False)
print("\\nTop Product-Region combinations:")
print(top_combinations.head())

# Data filtering and analysis
high_value_sales = df[df['Sales'] > 7000]
print(f"\\nHigh value sales (>7000): {len(high_value_sales)} transactions")
print("Average high value sale: $" + str(round(high_value_sales['Sales'].mean(), 2)))`}
          language="python"
        />

        <Quiz moduleId="numpy-pandas" questions={quizData["numpy-pandas"]} />
      </div>
    </ModuleContent>
  )
}

export default NumpyPandasPage
