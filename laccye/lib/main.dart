import 'package:flutter/material.dart';

void main() {
  runApp(LaccyApp());
}

class LaccyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Laccy',
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      home: LaccyHomePage(),
    );
  }
}

class LaccyHomePage extends StatefulWidget {
  @override
  _LaccyHomePageState createState() => _LaccyHomePageState();
}

class _LaccyHomePageState extends State<LaccyHomePage> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Laccy'),
      ),
      body: Center(
        child: Text(
          'Página $_selectedIndex',
          style: TextStyle(fontSize: 24),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Pesquisar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Configurações',
          ),
        ],
      ),
    );
  }
}
